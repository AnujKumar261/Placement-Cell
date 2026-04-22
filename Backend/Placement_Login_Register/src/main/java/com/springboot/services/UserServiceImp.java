package com.springboot.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.entities.User;
import com.springboot.payloads.UserDto;
import com.springboot.repojectries.User_repo;

@Service
public class UserServiceImp implements UserServices {

    @Autowired
    private User_repo user_repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // 🔥 REGISTER FIXED
    @Transactional
    @Override
    public UserDto createUser(UserDto userDto) {

        User existing = user_repo.findByEmail(userDto.getEmail());

        if (existing != null) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        User saved = user_repo.save(user);

        return userToDto(saved);
    }

    @Override
    public UserDto authenticateUser(String email, String password) {

        User user = user_repo.findByEmail(email);

        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return userToDto(user);
        }

        return null;
    }

    @Override
    public List<UserDto> getAllUsers() {
        return user_repo.findAll()
                .stream()
                .map(this::userToDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto getUserById(Integer userId) {
        User user = user_repo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return userToDto(user);
    }

    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {
        User user = user_repo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());

        if (userDto.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        }

        return userToDto(user_repo.save(user));
    }

    @Override
    public void deleteUser(Integer userId) {
        user_repo.deleteById(userId);
    }

    // DTO mapper
    private UserDto userToDto(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        return dto;
    }
}
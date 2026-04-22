package com.springboot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/report")
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {

    // ✅ Change this if your path is different
    private static final String UPLOAD_DIR = "C:/Users/anujk/Desktop/uploads/";

    // =========================
    // ✅ UPLOAD FILE API
    // =========================
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title) {

        try {
            // Create folder if not exists
            File directory = new File(UPLOAD_DIR);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Save file
            String filePath = UPLOAD_DIR + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            System.out.println("Uploaded: " + file.getOriginalFilename());
            System.out.println("Title: " + title);

            return ResponseEntity.ok("File uploaded successfully");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Upload failed");
        }
    }

    // =========================
    // ✅ GET FILE LIST (ADMIN)
    // =========================
    @GetMapping("/files")
    public ResponseEntity<?> getFiles() {

        File folder = new File(UPLOAD_DIR);
        File[] files = folder.listFiles();

        if (files == null || files.length == 0) {
            return ResponseEntity.ok(new String[]{});
        }

        String[] fileNames = new String[files.length];

        for (int i = 0; i < files.length; i++) {
            fileNames[i] = files[i].getName();
        }

        return ResponseEntity.ok(fileNames);
    }
}
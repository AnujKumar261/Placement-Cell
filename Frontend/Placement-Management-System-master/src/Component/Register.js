import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const registerAction = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let errors = {};

        if (password !== confirmPassword) {
            errors.password = "Passwords do not match";
            errors.confirmPassword = "Passwords do not match";
        }

        setValidationErrors(errors);

        if (Object.keys(errors).length > 0) {
            setIsSubmitting(false);
            return;
        }

        let payload = {
            name: name,
            email: email,
            password: password
        };

        axios.post('http://localhost:9090/api/users/', payload)
            .then((response) => {
                setIsSubmitting(false);

                // ✅ SUCCESS POPUP (THIS IS WHAT YOU WANTED)
                toast.success("Registration successful!");

                console.log("Registered User:", response.data);

                // reset form
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");

                // go to login page
                navigate("/login");
            })
            .catch((error) => {
                setIsSubmitting(false);

                console.log(error);

                // 🔥 IMPORTANT: show backend error message
                if (error.response && error.response.data) {
                    toast.error(error.response.data);
                } else {
                    toast.error("Registration failed. Try again.");
                }
            });
    };

    return (
        <div className='container'>
            <div className="card-body">
                <h1 className="card-title mb-4">Register</h1>

                <form onSubmit={registerAction}>
                    <div className="mb-3">
                        <label className="form-label">Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email address: </label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-grid gap-2">
                        <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-block">
                            Register Now
                        </button>

                        <p className="text-center">
                            Have already an account <NavLink to="/login">Login here</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
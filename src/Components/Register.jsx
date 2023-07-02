import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [designation, setdesignation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>REGISTER</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="designation">Designation</label>
            <input value={designation} name="designation" onChange={(e) => setName(e.target.value)} id="designation" placeholder="Title of Designation" />
            <Link to={`/`}>
            <button type="submit" className="login-btn">Sign In</button>
            </Link>
        </form>
        <Link to={`/login`}>
        <button className="link-btn" >Already have an account? Login here.</button>
        </Link>
    </div>
    )
}
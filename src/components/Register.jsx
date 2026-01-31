import React, { useState } from "react";

export default function Register({ setIsLoggedIn, setPage }) {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleRegister = () => {
    const { username, email, password, confirmPassword } = form;
    if (!username || !email || !password || !confirmPassword) return setError("All fields are required");
    if (username.length < 4 || username.length > 32) return setError("Username 4–32 chars");
    if (password.length < 8) return setError("Password at least 8 chars");
    if (password !== confirmPassword) return setError("Passwords do not match");

    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setPage("home"); // auto go home
  };

  return (
    <div className="content auth">
      <h1>Register/აქაუნთის შექმნა</h1>
      <img src="https://goa-project-swart.vercel.app/Images/486746374_650120267771272_6924946512758136755_n.jpg" alt="" />
      {error && <p className="error">{error}</p>}
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm password" value={form.confirmPassword} onChange={handleChange} />
      
      <button onClick={handleRegister}>Register(შეუერთდი გოას)</button>
    </div>
  );
}

import { useState } from "react";
import { validateSignupForm } from "./validate";

function SignupForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    day: "",
    month: "",
    year: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateSignupForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    alert("Đăng ký thành công!");

    console.log("Dữ liệu form:", form);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      day: "",
      month: "",
      year: "",
    });

    setErrors({});
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "4px",
    marginBottom: "4px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "13px",
    display: "block",
    minHeight: "18px",
    marginBottom: "6px",
  };

  return (
    <div
      style={{
        width: "420px",
        margin: "40px auto",
        background: "#f2f5fb",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "8px", color: "#1d2a5b" }}>Sign Up</h1>
      <p style={{ marginTop: 0, marginBottom: "20px", color: "#333" }}>
        It's free and anyone can join
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            style={inputStyle}
          />
          <small style={errorStyle}>{errors.firstName}</small>
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            style={inputStyle}
          />
          <small style={errorStyle}>{errors.lastName}</small>
        </div>

        <div>
          <label>Your Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <small style={errorStyle}>{errors.email}</small>
        </div>

        <div>
          <label>New Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={inputStyle}
          />
          <small style={errorStyle}>{errors.password}</small>
        </div>

        <div style={{ marginTop: "8px" }}>
          <label style={{ marginRight: "10px" }}>I am</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px" }}
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <small style={errorStyle}>{errors.gender}</small>
        </div>

        <div style={{ marginTop: "8px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>
            Birthday
          </label>

          <div style={{ display: "flex", gap: "8px" }}>
            <select
              name="month"
              value={form.month}
              onChange={handleChange}
              style={{ padding: "8px", borderRadius: "4px", flex: 1 }}
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              name="day"
              value={form.day}
              onChange={handleChange}
              style={{ padding: "8px", borderRadius: "4px", flex: 1 }}
            >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              style={{ padding: "8px", borderRadius: "4px", flex: 1 }}
            >
              <option value="">Year</option>
              {Array.from({ length: 60 }, (_, i) => 2025 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <small style={errorStyle}>
            {errors.month || errors.day || errors.year}
          </small>
        </div>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            background: "#67b74a",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
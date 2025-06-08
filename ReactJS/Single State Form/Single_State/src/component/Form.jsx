import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
       
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm your password"
            />
          </div>
        </form>
      </div>

      <div className="card mt-4 p-4 shadow-sm">
        <h4 className="mb-3 text-success"> Your Form Data </h4>
        <div className="row">
          <div className="col-md-6">
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Password:</strong> {formData.password}</p>
            <p><strong>Confirm Password:</strong> {formData.confirmPassword}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

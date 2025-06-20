import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    pageCount: "",
    available: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/books/create", form)
      .then(() => navigate("/"))
      .catch((err) => {
        const fieldErrors = err.response?.data?.error?.errors || {};
        const errorMsgs = {};
        for (const key in fieldErrors) {
          errorMsgs[key] = fieldErrors[key].message;
        }
        setErrors(errorMsgs);
      });
  };

  return (
    <div className="form-page">
      <h3 className="text-center mb-4">Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Title</label>
        <input className="form-control" name="title" value={form.title} onChange={handleChange} />
        {errors.title && <p className="text-danger">{errors.title}</p>}

        <label className="form-label">Author Name</label>
        <input className="form-control" name="author" value={form.author} onChange={handleChange} />
        {errors.author && <p className="text-danger">{errors.author}</p>}

        <label className="form-label">Page Count</label>
        <input className="form-control" name="pageCount" type="number" value={form.pageCount} onChange={handleChange} />
        {errors.pageCount && <p className="text-danger">{errors.pageCount}</p>}

        <div className="checkbox-line">
          <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
          <label>Is it Available?</label>
        </div>

        <div className="text-center">
          <button className="btn-main" type="submit">Add Book!</button>
        </div>
      </form>
    </div>
  );
};

export default Create;

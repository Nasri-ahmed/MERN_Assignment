import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OneBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}/details`)
      .then(res => setBook(res.data.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!book) {
    return <div className="container text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "450px" }}>
        <div className="card-body">
          <h2 className="text-center text-primary mb-4">{book.title}</h2>

          <div className="mb-3">
            <label className="form-label fw-bold">Author:</label>
            <div className="border p-2 rounded bg-light">{book.author}</div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Page Count:</label>
            <div className="border p-2 rounded bg-light">{book.pageCount}</div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Available:</label>
            <div className="border p-2 rounded bg-light">{book.available ? "Yes" : "No"}</div>
          </div>

          <div className="text-center">
            <Link to="/" className="btn btn-outline-primary">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBook;

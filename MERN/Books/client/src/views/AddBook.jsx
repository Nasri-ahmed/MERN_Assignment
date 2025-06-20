import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const nav = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", pageCount: "", available: true });

  const change = e => {
    const { name, value, type, checked } = e.target;
    setBook(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = e => {
    e.preventDefault();
    fetch("http://localhost:8000/api/books/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then(() => nav("/"))
      .catch(console.error);
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={submit} className="border p-4 rounded shadow-sm">
        <div className="mb-3"><label>Title</label><input name="title" onChange={change} required className="form-control" /></div>
        <div className="mb-3"><label>Author</label><input name="author" onChange={change} required className="form-control" /></div>
        <div className="mb-3"><label>Pages</label><input name="pageCount" type="number" onChange={change} required className="form-control" /></div>
        <div className="form-check mb-3">
          <input type="checkbox" name="available" checked={book.available} onChange={change} className="form-check-input" />
          <label className="form-check-label">Available</label>
        </div>
        <button className="btn btn-success">Add Book</button>
      </form>
    </>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const nav = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    pageCount: "",
    available: true,
  });

  const change = e => {
    const { name, value, type, checked } = e.target;
    setBook(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = e => {
    e.preventDefault();
    const bookToSend = {
      ...book,
      pageCount: Number(book.pageCount),
    };

    fetch("http://localhost:5000/api/books/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookToSend),
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      // بعد الإضافة نعيد التوجيه للكتالوج مع طلب تحديث
      .then(() => nav("/books?refresh=true"))
      .catch(err => console.error("Fetch error:", err));
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={submit} className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label>Title</label>
          <input
            name="title"
            onChange={change}
            required
            className="form-control"
            value={book.title}
          />
        </div>
        <div className="mb-3">
          <label>Author</label>
          <input
            name="author"
            onChange={change}
            required
            className="form-control"
            value={book.author}
          />
        </div>
        <div className="mb-3">
          <label>Pages</label>
          <input
            name="pageCount"
            type="number"
            onChange={change}
            required
            className="form-control"
            value={book.pageCount}
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="available"
            checked={book.available}
            onChange={change}
            className="form-check-input"
          />
          <label className="form-check-label">Available</label>
        </div>
        <button className="btn btn-success">Add Book</button>
      </form>
    </>
  );
}

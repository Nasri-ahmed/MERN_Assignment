import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/books/${id}`)
      .then(r => r.json())
      .then(d => setBook(d.data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const handleDelete = () => {
    fetch(`http://localhost:8000/api/books/${id}`, { method: "DELETE" })
      .then(() => nav("/"));
  };

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Pages:</strong> {book.pageCount}</p>
      <p><strong>Available:</strong> {book.available ? "Yes" : "No"}</p>
      <div className="mt-3">
        <button onClick={handleDelete} className="btn btn-danger me-2">Delete</button>
        <button onClick={() => nav("/")} className="btn btn-secondary">Back</button>
      </div>
    </div>
  );
}

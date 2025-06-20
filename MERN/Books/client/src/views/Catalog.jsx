import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/books")
      .then(r => r.json())
      .then(data => setBooks(data.data));
  }, []);

  return (
    <>
      <h2>Book Catalog</h2>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Title</th><th>Author</th><th>Pages</th><th>Available</th><th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b._id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.pageCount}</td>
              <td>{b.available ? "Yes" : "No"}</td>
              <td>
                <Link to={`/books/${b._id}`} className="btn btn-success btn-sm">Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

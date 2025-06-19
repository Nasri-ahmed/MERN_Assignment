import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const fetchBooks = () => {
    fetch("http://localhost:5000/api/books")
      .then(r => r.json())
      .then(data => {
        if (data.success) setBooks(data.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("refresh") === "true") {
      fetchBooks();
    }
  }, [location.search]);

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

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books")
      .then((res) => setBooks(res.data.allBookData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Book Catalog</h2>
     
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Page Count</th>
            <th>Available</th>
            <th>Book Page</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pageCount}</td>
              <td>
                {book.available ? "Yes" : "No"} | {" "}
                <Link to={`/books/${book._id}/edit`} className="btn-edit">Edit</Link>
              </td>
              <td>
                <Link to={`/books/${book._id}/details`} className="btn-details">Book Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

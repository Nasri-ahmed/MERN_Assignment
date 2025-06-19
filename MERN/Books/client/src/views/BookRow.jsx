import { Link } from "react-router-dom";

export default function BookRow({ book }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.pageCount}</td>
      <td>{book.available ? "Yes" : "No"}</td>
      <td>
        <Link to={`/books/${book._id}`} className="bg-green-500 text-white px-3 py-1 rounded">
          Book Details
        </Link>
      </td>
    </tr>
  );
}

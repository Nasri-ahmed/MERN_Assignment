import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">📚 Book Catalog</Link>
        <div>
          <Link className="btn btn-primary" to="/add">+ Add Book</Link>
        </div>
      </div>
    </nav>
  );
}

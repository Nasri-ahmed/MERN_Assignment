import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link className="navbar-brand fw-bold" to="/">Book Catalog</Link>
      <Link className="btn btn-outline-primary" to="/create">Add Book</Link>
    </nav>
  );
};

export default Header;
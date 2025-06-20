import Navbar from "./components/Navbar.jsx";
import Catalog from "./views/Catalog.jsx";
import AddBook from "./views/AddBook.jsx";
import BookDetails from "./views/BookDetails.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </>
  );
}

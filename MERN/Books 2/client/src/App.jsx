import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Create from "./views/Create";
import EditBook from "./views/EditBook";
import Home from "./views/Home";
import OneBook from "./views/OneBook";

function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
          <Route path="/books/:id/details" element={<OneBook />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

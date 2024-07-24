import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Root from "./components/root";
import Books from "./components/books";
import Book from "./components/book";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Root />} />
          <Route path="/books" element={<Books />}>
            <Route path="/books" element={<h2 className="text-white">Select a Book to See the Information</h2>} />
            <Route path="/books/:bookID" element={<Book />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

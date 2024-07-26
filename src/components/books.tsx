import { Link, Outlet, useParams, useSearchParams, useLocation } from "react-router-dom";
import data from "../assets/data.json";
import { useContext, useEffect } from "react";
import AppContext, { BookType } from "../context/context";

const Books = () => {
  const { bookID } = useParams();
  const ID: number | undefined = Number(bookID);
  const { text, setText, books, setBooks } = useContext(AppContext);
  const [serachParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const handleSearch = ({ value }: { value: string }): false | true => {
    setText(value);
    if (!value.trim()) {
      setSearchParams({});
      setBooks(data.books);
      return false;
    }
    setSearchParams({ q: value.trim() });
    const filtredBooks: BookType[] = data.books.filter((book) => book.title.toLowerCase().includes(value.trim()));
    setBooks(filtredBooks);
    return true;
  };

  useEffect(() => {
    setBooks(data.books);
  }, []);

  useEffect(() => {
    handleSearch({ value: text });
  }, [serachParams]);

  return (
    <div className="w-[75%] flex justify-between items-center">
      <div className="w-[28%] flex flex-col py-[3rem] gap-[1rem]">
        <input
          placeholder="Search a Book"
          className="w-[50%] px-3 py-1 rounded-lg"
          value={text}
          onChange={({ target }) => handleSearch(target)}
        />
        {books.map((book: BookType) => (
          <Link className={`${book.id === ID ? "text-red-500" : ""}`} to={`/books/${book.id}${location.search}`}>
            {book.title}
          </Link>
        ))}
      </div>
      <div className="w-1 h-full bg-white"></div>
      <div className="w-[68%] flex justify-center items-center flex-col gap-[2rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Books;

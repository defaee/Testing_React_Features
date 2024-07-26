import { Link, Outlet, useParams, useSearchParams, useLocation } from "react-router-dom";
import data from "../assets/data.json";
import { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  price: number;
}

const Books = () => {
  const [text, setText] = useState<string>("");
  const [serachParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const handleSearch = ({ value }: { value: string }) => {
    setText(value);
    if (!value.trim()) {
      setSearchParams({});
      return;
    }
    setSearchParams({ q: value.trim() });
  };
  const { bookID } = useParams();
  const ID: number | undefined = Number(bookID);

  useEffect(() => {
    const query = serachParams.get("q") || "";
    handleSearch({ value: query });
  }, [serachParams]);

  const filteredBooks = text ? data.books.filter((book: Book) => book.title.toLowerCase().includes(text.toLowerCase())) : data.books;
  return (
    <div className="w-[75%] flex justify-between items-center">
      <div className="w-[28%] flex flex-col py-[3rem] gap-[1rem]">
        <input
          placeholder="Search a Book"
          className="w-[50%] px-3 py-1 rounded-lg"
          value={text}
          onChange={({ target }) => handleSearch(target)}
        />
        {filteredBooks.map((book: Book) => (
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

import { Link, Outlet, useParams } from "react-router-dom";
import data from "../assets/data.json";

interface Book {
  id: number;
  title: string;
  price: number;
}

const Books = () => {
  const { bookID } = useParams();
  const ID: number | undefined = Number(bookID);
  return (
    <div className="w-[75%] flex justify-between items-center">
      <div className="w-[28%] flex flex-col py-[3rem] gap-[1rem]">
        {data.books.map((book: Book) => (
          <Link className={`${book.id === ID ? "text-red-500" : ""}`} to={`/books/${book.id}`}>
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

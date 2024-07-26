import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import { useContext } from "react";
import AppContext from "../context/context";

interface BookType {
  id: number;
  title: string;
  price: number;
}

const Book = () => {
  const { books } = useContext(AppContext);
  const { bookID } = useParams();
  const ID: number = Number(bookID);
  const book: BookType | undefined = books.find((book: BookType) => {
    return book.id === ID;
  });

  return (
    <>
      <h2 className="text-white">{book?.title}</h2>
      <h3 className="text-white">price: ${book?.price}</h3>
    </>
  );
};

export default Book;

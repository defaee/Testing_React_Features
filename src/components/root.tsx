import { Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Link to={"/books"} className="text-white">
        Books
      </Link>
    </>
  );
};

export default Root;

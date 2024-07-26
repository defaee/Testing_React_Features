import { createContext, Dispatch, SetStateAction } from "react";

export interface BookType {
  id: number;
  title: string;
  price: number;
}

// Define the types for our context values
interface AppContextType {
  books: BookType[];
  setBooks: Dispatch<SetStateAction<BookType[]>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

// Create a default context value
const defaultContextValue: AppContextType = {
  books: [],
  setBooks: () => {},
  text: "",
  setText: () => {},
};

// Create the context with the default value and types
const AppContext = createContext<AppContextType>(defaultContextValue);

export default AppContext;

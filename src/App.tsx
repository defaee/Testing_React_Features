import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Root from "./components/root";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Root />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

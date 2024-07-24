import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-black w-full h-screen flex pt-[4rem] gap-[4rem] flex-col items-center">
      <h1 className="text-2xl text-white">React Router Dom + React Hooks</h1>
      <hr className="text-white h-1 w-[80%]" />
      <Outlet />
    </main>
  );
};

export default Home;

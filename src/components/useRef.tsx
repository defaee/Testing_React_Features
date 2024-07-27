import { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = () => {
    if (inputRef.current) {
      inputRef.current.placeholder = inputRef.current?.value || "";
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  return (
    <main className="bg-black w-full h-screen flex pt-[4rem] gap-[4rem] flex-col items-center">
      <h1 className="text-2xl text-white">React useRef Hook</h1>
      <hr className="text-white h-1 w-[80%]" />
      <div className="flex flex-col items-center gap-10">
        <input type="text" placeholder="change placeholder" className="px-3 py-1 rounded-md" ref={inputRef} />
        <button className="bg-blue-400 rounded-lg w-[100px] h-[40px]" onClick={handleChange}>
          Change
        </button>
      </div>
    </main>
  );
};

export default UseRef;

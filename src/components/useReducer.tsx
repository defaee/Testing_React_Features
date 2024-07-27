import { useReducer, useTransition } from "react";

interface ACTIONS {
  type: "plus" | "minus";
  payload: number;
}

interface State {
  count: number;
}

const countReducer = (state: State, action: ACTIONS) => {
  switch (action.type) {
    case "plus":
      return { count: state.count + action.payload };
    case "minus":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [countStore, dispatchCount] = useReducer(countReducer, { count: 0 });
  const [isPending, startTransition] = useTransition();

  const handlePlus = () => {
    startTransition(() => {
      let num: number = 0;
      while (num < 20000) {
        num++;
      }

      dispatchCount({ type: "plus", payload: 1 });
    });
  };

  const handleMinus = () => {
    dispatchCount({ type: "minus", payload: 1 });
  };

  return (
    <main className="bg-black w-full h-screen flex pt-[4rem] gap-[4rem] flex-col items-center">
      <h1 className="text-2xl text-white">React useRef Hook</h1>
      <hr className="text-white h-1 w-[80%]" />
      <div className="flex flex-col items-center gap-10">
        <button className="bg-blue-400 rounded-lg w-[100px] h-[40px]" onClick={handlePlus}>
          Plus
        </button>
        <h3 className="text-white text-2xl">{isPending ? "loading ..." : countStore.count}</h3>
        <button className="bg-blue-400 rounded-lg w-[100px] h-[40px]" onClick={handleMinus}>
          Minus
        </button>
      </div>
    </main>
  );
};

export default UseReducer;

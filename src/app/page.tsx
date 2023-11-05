"use client";

import Block from "@/Componenets/Block";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [x, setX] = useState(0);
  const [o, setO] = useState(0);
  // let X: number = 0;
  // let O: number = 0;

  // check winner
  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
  };

  const handleClick = (index: number) => {
    const tempState = Array.from(state);
    // console.log(tempState);
    if (tempState[index] !== null) return;

    tempState[index] = currentTurn;
    // console.log(tempState[index]);

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    // check win
    const winner = checkWinner(tempState);
    if (winner) {
      currentTurn === "X" ? `${setX(x + 1)}` : `${setO(o + 1)}`;

      setTimeout(() => {
        alert(`${currentTurn}, won`);
        return setState(Array(9).fill(null));
      }, 100);
    }
    setState(tempState);
  };
  // console.log(O, "o win");

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  // console.log(state);

  return (
    <main className=" text-center mt-4 w-full h-full">
      <h1 className=" font-bold text-lg text-red-600">Tic Tac Toe</h1>
      {/* total wins */}
      <div>
        <p>X has won: {x} time</p>
        <p>O has won: {o} time</p>
      </div>
      {/* board */}
      {/* row 1 */}
      <div className=" flex my-auto mx-1 justify-center">
        {/* <div className=" h-20 w-20 border border-red-600 text-red-700 flex justify-center items-center cursor-pointer text-[30px]"></div> */}
        <Block onClick={() => handleClick(0)} value={state[0]} />
        <Block onClick={() => handleClick(1)} value={state[1]} />
        <Block onClick={() => handleClick(2)} value={state[2]} />
      </div>
      {/* row 2 */}
      <div className=" flex my-auto mx-1 justify-center">
        <Block onClick={() => handleClick(3)} value={state[3]} />
        <Block onClick={() => handleClick(4)} value={state[4]} />
        <Block onClick={() => handleClick(5)} value={state[5]} />
      </div>
      {/* row 3 */}
      <div className=" flex my-auto mx-1 justify-center">
        <Block onClick={() => handleClick(6)} value={state[6]} />
        <Block onClick={() => handleClick(7)} value={state[7]} />
        <Block onClick={() => handleClick(8)} value={state[8]} />
      </div>
      <div>
        <button
          type="button"
          className=" mt-4 bg-gray-700 border-0 rounded text-white py-1 px-4"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </main>
  );
}

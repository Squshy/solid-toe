import type { Component } from "solid-js";
import Square from "./Square";

const Squares: Component = () => {
  const buildSquares = () => {
    const squares = [];
    const boardSize = 9;

    for (let i = 0; i < boardSize; ++i) {
      squares.push(<Square row={Math.floor(i / 3)} col={i % 3} />);
    }

    return squares;
  };

  return (
    <div class="max-w-[19.5rem] md:max-w-[34.5rem] flex flex-wrap gap-2 justify-center">
      {buildSquares()}
    </div>
  );
};

export default Squares;

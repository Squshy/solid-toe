import type { Component } from "solid-js";
import { useGameContext } from "../../contexts/GameContext";

interface SquareProps {
  row: number;
  col: number;
}

const Square: Component<SquareProps> = (props) => {
  const context = useGameContext();

  return (
    <button
      class="flex w-24 h-24 md:w-44 md:h-44 rounded-lg bg-black bg-opacity-50 hover:before:opacity-100 border border-solid-200 dark:border-slate-600"
      onClick={() => console.log("aa")}
    ></button>
  );
};

export default Square;

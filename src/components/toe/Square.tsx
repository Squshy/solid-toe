import type { Component } from "solid-js";
import { useGameContext } from "../../contexts/GameContext";

interface SquareProps {
  player?: Player;
  row: number;
  col: number;
}

const Square: Component<SquareProps> = (props) => {
  const {} = useGameContext();

  return (
    <div class="flex w-24 h-24 md:w-44 md:h-44 rounded-lg cursor-pointer bg-black bg-opacity-50 hover:before:opacity-100 border border-solid-200 dark:border-slate-600"></div>
  );
};

export default Square;

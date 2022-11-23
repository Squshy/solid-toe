import type { Component } from "solid-js";
import { useGameContext } from "../../contexts/GameContext";
import PlayerSelect from "./PlayerSelect";
import Squares from "./Squares";

const Game: Component = () => {
  const context = useGameContext();

  return (
    <div class="w-full flex justify-center p-4">
      {context().currentPlayer ? <Squares /> : <PlayerSelect />}
    </div>
  );
};

export default Game;

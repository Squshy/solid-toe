import type { Component } from "solid-js";
import { useGameContext } from "../../contexts/GameContext";

interface SelectButtonProps {
  player: Player;
}

const SelectButton: Component<SelectButtonProps> = (props) => {
  const context = useGameContext();
  return (
    <button
      class="w-64 p-4 bg-blue-400 text-white dark:text-inherit dark:bg-black rounded-lg"
      onClick={() => context().selectPlayer(props.player)}
    >
      {props.player}
    </button>
  );
};

const PlayerSelect: Component = () => {
  return (
    <div class="w-full flex items-center justify-center flex-col gap-2">
      <p class="flex">Select Your Thingy</p>
      <div class="flex flex-row gap-4">
        <SelectButton player="x" />
        <SelectButton player="o" />
      </div>
    </div>
  );
};

export default PlayerSelect;

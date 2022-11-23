import Game from "./Game";
import GameProvider from "../../contexts/GameContext";

const Toe = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default Toe;

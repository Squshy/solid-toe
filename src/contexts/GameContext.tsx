import type { Component } from "solid-js";
import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

interface IGameContext {
  isSquareOccupied: (row: number, col: number) => boolean;
  occupySquare: (row: number, col: number, player: Player) => void;
}

const GameContext = createContext<IGameContext>();

interface IGameState {
  currentPlayer: Player | undefined;
  // Map the clicked on squares to a player
  occupiedSquares: Map<string, Player>;
}

const initialState: IGameState = {
  currentPlayer: undefined,
  occupiedSquares: new Map(),
} as const;

interface GameProviderProps {
  children?: HTMLElement | HTMLElement[];
}

const GameProvider: Component<GameProviderProps> = (props) => {
  const [state, setState] = createStore(initialState);

  const mapKey = (row: number, col: number): string => `${row}:${col}`;

  const isSquareOccupied = (row: number, col: number): boolean => {
    return state.occupiedSquares.has(mapKey(row, col));
  };

  const occupySquare = (row: number, col: number, player: Player): void => {
    if (isSquareOccupied(row, col)) {
      return;
    }

    // Kinda gross but gotta re-make a new map
    const newMap = new Map(state.occupiedSquares);
    newMap.set(mapKey(row, col), player);
    setState({ occupiedSquares: newMap });
  };

  const providerValue: IGameContext = {
    isSquareOccupied,
    occupySquare,
  } as const;

  return (
    <GameContext.Provider value={providerValue}>
      {props.children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(
      "useGameProvider can only be used within a <GameProvider /> component."
    );
  }

  return context;
};

export default GameProvider;

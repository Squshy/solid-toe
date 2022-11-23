import type { Component, JSX, Accessor } from "solid-js";
import { createContext, useContext, createMemo } from "solid-js";
import { createStore } from "solid-js/store";

interface IGameContext {
  isSquareOccupied: (row: number, col: number) => boolean;
  occupySquare: (row: number, col: number) => void;
  currentPlayer: Player | undefined;
  selectPlayer: (player: Player) => void;
}

const GameContext = createContext<Accessor<IGameContext>>();

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
  children?: JSX.Element | JSX.Element[];
}

const GameProvider: Component<GameProviderProps> = (props) => {
  const [state, setState] = createStore(initialState);

  const mapKey = (row: number, col: number): string => `${row}:${col}`;

  const selectPlayer = (player: Player): void => {
    setState({ currentPlayer: player });
  };

  const isSquareOccupied = (row: number, col: number): boolean => {
    return state.occupiedSquares.has(mapKey(row, col));
  };

  const occupySquare = (row: number, col: number): void => {
    if (isSquareOccupied(row, col) || !state.currentPlayer) {
      return;
    }

    // Kinda gross but gotta re-make a new map
    const newMap = new Map(state.occupiedSquares);
    newMap.set(mapKey(row, col), state.currentPlayer);
    setState({ occupiedSquares: newMap });
  };

  // This doesn't feel right?
  const providerValue = createMemo(() => ({
    isSquareOccupied,
    occupySquare,
    currentPlayer: state.currentPlayer,
    selectPlayer,
  }));

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

import type { Component } from "solid-js";
import Header from "./components/Header";
import Game from "./components/toe/Game";

const App: Component = () => {
  return (
    <div class="h-screen">
      <Header />
      <Game />
    </div>
  );
};

export default App;

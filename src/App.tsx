import type { Component } from "solid-js";
import Header from "./components/Header";
import Toe from "./components/toe";

const App: Component = () => {
  return (
    <div class="h-screen">
      <Header />
      <Toe />
    </div>
  );
};

export default App;

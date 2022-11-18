import type { Component } from "solid-js";
import ThemeToggle from "./ThemeToggle";

const Header: Component = () => {
  return (
    <div class="w-full p-4 flex flex-row">
      <div>Solid Toe</div>
      <ThemeToggle />
    </div>
  );
};

export default Header;

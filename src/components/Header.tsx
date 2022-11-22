import type { Component } from "solid-js";
import ToggleThemeButton from "./ToggleThemeButton";

const Header: Component = () => {
  return (
    <div class="w-full p-4 flex flex-row">
      <div>Solid Toe</div>
      <ToggleThemeButton />
    </div>
  );
};

export default Header;

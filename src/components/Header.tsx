import type { Component } from "solid-js";
import ToggleThemeButton from "./ToggleThemeButton";

const Header: Component = () => {
  return (
    <div class="w-full p-4 flex flex-row">
      <div class="w-full flex">Solid Toe</div>
      <div class="w-full flex-row flex justify-start">
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Header;

import type { Component } from "solid-js";
import ToggleThemeButton from "./ToggleThemeButton";

const Header: Component = () => {
  return (
    <div class="w-full p-4 flex flex-row border-b border-blue-200 dark:border-slate-600 items-center">
      <div class="w-full flex">Solid Toe</div>
      <div class="w-full flex justify-end">
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default Header;

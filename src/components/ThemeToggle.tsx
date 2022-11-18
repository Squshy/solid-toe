import type { Component } from "solid-js";
import { createSignal, Switch, Match } from "solid-js";
import { getLocalItem, setLocalItem } from "../utils/local-storage";
import { MoonIcon, SunIcon } from "../icons";
import IconButton from "./IconButton";

const THEME_KEY = "theme";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function getHTMLElement() {
  const htmlEls = document.getElementsByTagName("html");

  if (htmlEls.length !== 1) {
    throw new Error("why. dont do that");
  }

  return htmlEls[0];
}

const ThemeToggle: Component = () => {
  const storedTheme = getLocalItem<Theme>(THEME_KEY, Theme.LIGHT);
  const htmlEl = getHTMLElement();

  const [theme, setTheme] = createSignal(storedTheme);

  const toggleTheme = () => {
    const themeToSet = theme() === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setLocalItem(THEME_KEY, themeToSet);
    setTheme(themeToSet);
    htmlEl.className = themeToSet;
  };

  return (
    <Switch>
      <Match when={theme() === Theme.DARK}>
        <IconButton icon={SunIcon} onClick={toggleTheme} />
      </Match>
      <Match when={theme() === Theme.LIGHT}>
        <IconButton icon={MoonIcon} onClick={toggleTheme} />
      </Match>
    </Switch>
  );
};

export default ThemeToggle;

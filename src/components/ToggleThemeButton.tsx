import type { Component } from "solid-js";
import { createSignal, Switch, Match } from "solid-js";
import { getLocalItem, setLocalItem } from "../utils/local-storage";
import { MoonIcon, SunIcon } from "../icons";
import IconButton, { IconButtonProps } from "./IconButton";

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

interface ToggleThemeButtonProps
  extends Omit<IconButtonProps, "icon" | "onClick"> {}

const ToggleThemeButton: Component<ToggleThemeButtonProps> = (props) => {
  const storedTheme = getLocalItem<Theme>(THEME_KEY, Theme.LIGHT);
  const htmlEl = getHTMLElement();

  const [theme, setTheme] = createSignal(storedTheme);

  const toggleTheme = () => {
    const themeToSet = theme() === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setLocalItem(THEME_KEY, themeToSet);
    setTheme(themeToSet);
    htmlEl.className = themeToSet;
  };

  const iconBtn = (icon: typeof MoonIcon | typeof SunIcon) => (
    <IconButton icon={icon} onClick={toggleTheme} {...props} />
  );

  return (
    <Switch fallback={iconBtn(SunIcon)}>
      <Match when={theme() === Theme.DARK}>{iconBtn(SunIcon)}</Match>
      <Match when={theme() === Theme.LIGHT}>{iconBtn(MoonIcon)}</Match>
    </Switch>
  );
};

export default ToggleThemeButton;

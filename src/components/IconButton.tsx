import type { Component, JSX } from "solid-js";
import type { IconProps } from "../icons";

type IconComponent = Component<IconProps>;

export interface IconButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconComponent;
  iconClass?: string;
}

const IconButton: Component<IconButtonProps> = (props) => {
  const buttonBaseClasses =
    "rounded-md border-solid-200 border-2 p-3 dark:border-slate-600";
  const buttonClasses = props.class
    ? `${props.class} ${buttonBaseClasses}`
    : buttonBaseClasses;

  return (
    <button class={buttonClasses} onClick={props.onClick}>
      <props.icon class={props.iconClass ?? "h-4 w-4"} />
    </button>
  );
};

export default IconButton;

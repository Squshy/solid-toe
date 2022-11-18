import type { Component } from "solid-js";
import type { IconProps } from "../icons";

type IconComponent = Component<IconProps>;

interface IconButtonProps extends IconProps {
  icon: IconComponent;
  onClick?: () => void;
}

const IconButton: Component<IconButtonProps> = (props) => {
  const iconBaseClasses = "hite h-4 w-4";
  const classes = props.class
    ? `${props.class} ${iconBaseClasses}`
    : iconBaseClasses;

  return (
    <button
      class="rounded-md border-solid-200 border-2 p-3"
      onClick={props.onClick}
    >
      <props.icon class={classes} />
    </button>
  );
};

export default IconButton;

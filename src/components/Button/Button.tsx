import { Button as BaseButton } from "antd";
import classNames from "classnames";

import "./Button.scss";

const Button = (props: any) => (
  <BaseButton
    {...props}
    className={classNames("button", props.className, {
      "button--large": props.size === "large",
    })}
  />
);

export default Button;

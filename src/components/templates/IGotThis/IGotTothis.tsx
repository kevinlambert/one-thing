import React from "react";
import { useTheme, ToggleButton, Icon } from "@aws-amplify/ui-react";
import { MdCheckCircle } from "react-icons/md";
import "./_igotthis.scss";

type Props = {
  isPressed: boolean;
  onPressedHandler: any;
};

export default ({ isPressed, onPressedHandler }: Props) => {
  const { tokens } = useTheme();

  return (
    <ToggleButton
      size="small"
      isPressed={isPressed}
      onChange={onPressedHandler}
      className={isPressed ? "i-got-this__pressed" : "i-got-this"}
    >
      {isPressed ? (
        <Icon marginRight={tokens.space.xxxs} as={MdCheckCircle} />
      ) : null}
      I got to this
    </ToggleButton>
  );
};

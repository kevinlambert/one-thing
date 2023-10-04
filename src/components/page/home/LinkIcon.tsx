import { Flex, Icon, useTheme } from "@aws-amplify/ui-react";
import { MdLink, MdLinkOff } from "react-icons/md";
import "./linkIcon.scss";

type Props = {
  isLinked?: boolean;
};

export default ({ isLinked = false }: Props) => {
  const { tokens } = useTheme();

  return (
    <Flex
      className="linkIcon"
      borderRadius={"16px"}
      width={"32px"}
      height={"32px"}
      borderStyle={"solid"}
      borderWidth={tokens.borderWidths.small}
      borderColor={
        isLinked ? tokens.colors.green[60] : tokens.colors.neutral[40]
      }
      backgroundColor={tokens.colors.white}
      color={isLinked ? tokens.colors.green[60] : tokens.colors.neutral[40]}
      alignItems={"center"}
      justifyContent={"center"}
      position={"absolute"}
      top={"-16px"}
    >
      <Icon height={"22px"} as={isLinked ? MdLink : MdLinkOff}></Icon>
    </Flex>
  );
};

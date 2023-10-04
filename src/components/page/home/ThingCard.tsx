import { useNavigate } from "react-router-dom";
import { View, Text, Divider, Button, useTheme } from "@aws-amplify/ui-react";
import LinkIcon from "./LinkIcon";

type ToDoProps = {
  path: string;
};

const ToDo = ({ path }: ToDoProps) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(path);
  };

  return (
    <View>
      <Button size="small" variation="primary" onClick={onClickHandler}>
        Set your ONE Thing
      </Button>
    </View>
  );
};

type Props = {
  periodTitle: string;
  thingContent?: string;
  isLinked?: boolean;
  isLinkedIcon?: boolean;
  showLink?: boolean;
  borderTopRound?: boolean;
  borderBottomRound?: boolean;
  toDoPath: string;
};

export default ({
  periodTitle,
  thingContent,
  isLinked = false,
  isLinkedIcon = false,
  showLink = false,
  borderTopRound = false,
  borderBottomRound = false,
  toDoPath,
}: Props) => {
  const { tokens } = useTheme();

  return (
    <View
      position={"relative"}
      padding={tokens.space.medium}
      borderRadius={
        borderTopRound
          ? `${tokens.space.medium} ${tokens.space.medium} 0 0`
          : borderBottomRound
          ? `0 0 ${tokens.space.medium} ${tokens.space.medium}`
          : 0
      }
      borderWidth={tokens.borderWidths.small}
      borderStyle={"solid"}
      borderColor={
        isLinked ? tokens.colors.green[60] : tokens.colors.neutral[40]
      }
      backgroundColor={
        isLinked ? tokens.colors.green[10] : tokens.colors.neutral[10]
      }
    >
      {showLink && <LinkIcon isLinked={isLinkedIcon} />}
      <Text marginBottom={tokens.space.xxs} fontSize={tokens.fontSizes.xs}>
        {periodTitle}
      </Text>
      <Divider size="small" marginBottom={tokens.space.xxs} />
      <Text fontSize={tokens.fontSizes.large}>{thingContent}</Text>
      {!thingContent && <ToDo path={toDoPath} />}
    </View>
  );
};

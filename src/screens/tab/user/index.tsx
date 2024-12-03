import { Text, VStack } from "components/patterns";

const UserScreen = () => {
  return (
    <VStack fill align="center" justify="center" background="background.root.regular">
      <Text type="title.strong" color="content.neutral.primary">
        User
      </Text>
    </VStack>
  );
};

export { UserScreen };

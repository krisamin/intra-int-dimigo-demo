import { Text, VStack } from "components/patterns";

const HomeScreen = () => {
  return (
    <VStack fill align="center" justify="center" background="background.root.regular">
      <Text type="title.strong" color="content.neutral.primary">
        Home
      </Text>
    </VStack>
  );
};

export { HomeScreen };

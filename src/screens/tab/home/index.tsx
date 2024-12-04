import { Icon } from "components/assets";
import { HStack, Text, VStack } from "components/patterns";

const HomeScreen = () => {
  return (
    <VStack fill align="center" justify="center" gap={8}>
      <Text type="title.strong" color="content.neutral.primary">
        Home
      </Text>
      <HStack gap={8}>
        <Icon name="ThumbUp" color="semantic.status.success" />
        <Icon name="ThumbUp" color="semantic.status.success" fill />
        <Icon name="ThumbDown" color="semantic.status.danger" />
        <Icon name="ThumbDown" color="semantic.status.danger" fill />
      </HStack>
    </VStack>
  );
};

export { HomeScreen };

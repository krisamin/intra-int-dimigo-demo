import { Button } from "react-native";

import { Text, VStack } from "components/patterns";
import { useAuth } from "contexts/auth";

const LoginScreen = () => {
  const { setAuth } = useAuth();

  return (
    <VStack fill align="center" justify="center">
      <Text type="title.strong" color="content.neutral.primary">
        Hello, <Text color="semantic.brand">React Native!</Text>
      </Text>
      <Button
        title="Login"
        onPress={() => {
          setAuth({ accessToken: "123", refreshToken: "456" });
        }}
      />
    </VStack>
  );
};

export { LoginScreen };

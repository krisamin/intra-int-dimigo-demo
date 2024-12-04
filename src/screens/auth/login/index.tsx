import { Button, ImageBackground } from "react-native";

import { Text, VStack } from "components/patterns";
import { useAuth } from "contexts/auth";
import { useTheme } from "contexts/theme";

const LoginScreen = () => {
  const { scheme } = useTheme();
  const { setAuth } = useAuth();

  return (
    <VStack fill justify="center" gap={32} padding={[16, 16]}>
      <VStack gap={20} padding={[0, 4]}>
        <Text type="title.regular" color="content.neutral.tertiary">
          즐거운 학교 생활,{"\n"}
          <Text type="title.strong" color="content.neutral.primary">
            <Text color="semantic.brand">디미고인</Text>과 함께.
          </Text>
        </Text>
      </VStack>
      <Button
        title="Login"
        onPress={() => {
          setAuth({ accessToken: "123", refreshToken: "456" });
        }}
      />
      <ImageBackground
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 200,
          opacity: scheme === "dark" ? 0.2 : 1,
        }}
        source={require("assets/background.png")}
      />
    </VStack>
  );
};

export { LoginScreen };

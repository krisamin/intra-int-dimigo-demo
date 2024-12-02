import { View } from "react-native";

import { Text } from "components/patterns";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text type="title.strong" color="semantic.brand">
        Hello, React Native!
      </Text>
    </View>
  );
};

export { App };

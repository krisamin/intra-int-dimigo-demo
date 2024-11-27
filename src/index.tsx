import { Text, View } from "react-native";

const Root = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "SUIT-Medium", fontSize: 20 }}>Hello, React Native!</Text>
    </View>
  );
};

export { Root };

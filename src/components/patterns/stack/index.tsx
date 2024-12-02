import { View } from "react-native";

type StackProps = {
  children: React.ReactNode;
};
const Stack: React.FC<StackProps> = ({ children }) => {
  return <View>{children}</View>;
};

export { Stack };

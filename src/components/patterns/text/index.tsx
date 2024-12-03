import type { StyleProp, TextStyle } from "react-native";
import type { ColorPath, TextPath } from "values";

import { Text as RNText } from "react-native";

import { useTheme } from "contexts/theme";
import { text } from "values";

interface TextProps {
  children: React.ReactNode;
  type?: TextPath;
  color?: ColorPath;
  align?: "left" | "center" | "right";
  style?: StyleProp<TextStyle>;
}
const Text: React.FC<TextProps> = ({ children, type, color, align, style }) => {
  const { decodeColor } = useTheme();

  const [size, weight] = (type || "").split(".") as [keyof typeof text, string];
  const textStyle = type && text[size][weight as keyof (typeof text)[typeof size]];

  return (
    <RNText
      style={[
        { includeFontPadding: false },
        color && { color: decodeColor(color) },
        align && { textAlign: align },
        textStyle,
        style,
      ]}>
      {children}
    </RNText>
  );
};

export { Text };

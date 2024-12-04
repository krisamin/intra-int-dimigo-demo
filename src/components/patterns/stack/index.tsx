import type { StyleProp, ViewStyle } from "react-native";
import type { ColorPath } from "values";

import { Pressable, View } from "react-native";

import { useTheme } from "contexts/theme";

const alignMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
} as const;
const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
} as const;
type Align = keyof typeof alignMap;
type Justify = keyof typeof justifyMap;
type Padding = [number] | [number, number] | [number, number, number] | [number, number, number, number];

const paddingResolve = (padding: Padding) => {
  switch (padding.length) {
    case 1:
      return { paddingTop: padding[0], paddingRight: padding[0], paddingBottom: padding[0], paddingLeft: padding[0] };
    case 2:
      return { paddingTop: padding[0], paddingRight: padding[1], paddingBottom: padding[0], paddingLeft: padding[1] };
    case 3:
      return { paddingTop: padding[0], paddingRight: padding[1], paddingBottom: padding[2], paddingLeft: padding[1] };
    case 4:
      return { paddingTop: padding[0], paddingRight: padding[1], paddingBottom: padding[2], paddingLeft: padding[3] };
  }
};

interface StackProps {
  children?: React.ReactNode;
  fill?: boolean;
  fullFill?: boolean;
  absoluteFill?: boolean;
  align?: Align;
  justify?: Justify;
  gap?: number;
  padding?: Padding;
  background?: ColorPath;
  style?: StyleProp<ViewStyle>;
  on?: {
    press?: () => void;
    longPress?: () => void;
    pressIn?: () => void;
    pressOut?: () => void;
    disabled?: boolean;
  };
}

interface StackBaseProps extends StackProps {
  direction: "row" | "column";
}
const StackBase: React.FC<StackBaseProps> = (props) => {
  const { decodeColor } = useTheme();

  const Base = props.on ? Pressable : View;

  return (
    <Base
      style={[
        { flexDirection: props.direction },
        props.fill && { flex: 1 },
        props.fullFill && { width: "100%", height: "100%" },
        props.absoluteFill && { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
        props.align && { alignItems: alignMap[props.align] },
        props.justify && { justifyContent: justifyMap[props.justify] },
        { gap: props.gap },
        props.padding && paddingResolve(props.padding),
        props.background && { backgroundColor: decodeColor(props.background) },
        props.style,
      ]}
      onPress={props.on?.press}
      onLongPress={props.on?.longPress}
      onPressIn={props.on?.pressIn}
      onPressOut={props.on?.pressOut}>
      {props.children}
    </Base>
  );
};

const HStack: React.FC<StackProps> = (props) => {
  return <StackBase direction="row" {...props} />;
};

const VStack: React.FC<StackProps> = (props) => {
  return <StackBase direction="column" {...props} />;
};

export { HStack, VStack };

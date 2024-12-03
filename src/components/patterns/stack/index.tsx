import type { ColorPath } from "values";

import { View } from "react-native";

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

interface StackProps {
  children?: React.ReactNode;
  fill?: boolean;
  fullFill?: boolean;
  absoluteFill?: boolean;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  background?: ColorPath;
}

interface StackBaseProps extends StackProps {
  direction: "row" | "column";
}
const StackBase: React.FC<StackBaseProps> = (props) => {
  const { decodeColor } = useTheme();

  return (
    <View
      style={[
        { flexDirection: props.direction },
        props.fill && { flex: 1 },
        props.fullFill && { width: "100%", height: "100%" },
        props.absoluteFill && { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
        props.align && { alignItems: alignMap[props.align] },
        props.justify && { justifyContent: justifyMap[props.justify] },
        props.background && { backgroundColor: decodeColor(props.background) },
      ]}>
      {props.children}
    </View>
  );
};

const HStack: React.FC<StackProps> = (props) => {
  return <StackBase direction="row" {...props} />;
};

const VStack: React.FC<StackProps> = (props) => {
  return <StackBase direction="column" {...props} />;
};

export { HStack, VStack };

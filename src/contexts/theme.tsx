import React from "react";

import type { EdgeInsets } from "react-native-safe-area-context";
import type { Color, ColorPath } from "values";

import { Appearance, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { decodePath } from "utils/funcs";
import { dimigoColor } from "values";

type Scheme = "light" | "dark";
interface ThemeContextValue {
  scheme: Scheme;
  color: Color;
  screen: { width: number; height: number };
  insets: EdgeInsets;
  decodeColor: (path: ColorPath) => string;
}
const ThemeContext = React.createContext({} as ThemeContextValue);

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  const [screen, setScreen] = React.useState({ width: 0, height: 0 });
  const [scheme, setScheme] = React.useState<Scheme>(Appearance.getColorScheme() || "light");

  React.useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setScheme(colorScheme || "light");
    });

    return () => subscription.remove();
  }, []);

  const color = React.useMemo(() => {
    return dimigoColor[scheme];
  }, [scheme]);

  const decodeColor = React.useCallback((path: ColorPath) => decodePath(color, path), [color]);

  return (
    <View
      style={{ flex: 1 }}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setScreen({ width, height });
      }}>
      <ThemeContext.Provider
        value={{
          scheme,
          color,
          screen,
          insets,
          decodeColor,
        }}>
        {children}
      </ThemeContext.Provider>
    </View>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme };

import React from "react";

import { type Color, type ColorPath, dimigoColor } from "values";

import { Appearance, View } from "react-native";
import { decodePath } from "utils/funcs";

type Scheme = "light" | "dark";
interface ThemeContextValue {
  scheme: Scheme;
  color: Color;
  screen: { width: number; height: number };
  decodeColor: (path: ColorPath) => string;
}
const ThemeContext = React.createContext({} as ThemeContextValue);

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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
          decodeColor,
        }}>
        {children}
      </ThemeContext.Provider>
    </View>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme };

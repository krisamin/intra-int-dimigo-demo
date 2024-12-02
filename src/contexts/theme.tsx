import React from "react";

import { type Color, type ColorPath, dimigoColor } from "values";

import { Appearance, View } from "react-native";

type DecodeColor = (path: ColorPath) => string;

type Scheme = "light" | "dark";
const ThemeContext = React.createContext<{
  scheme: Scheme;
  color: Color;
  screen: { width: number; height: number };
  decodeColor: DecodeColor;
}>({
  scheme: "" as Scheme,
  color: {} as Color,
  screen: {} as { width: number; height: number },
  decodeColor: {} as DecodeColor,
});

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

  type ColorRecord = Record<string, string | Record<string, string>>;
  const decodeColor = React.useCallback(
    (path: ColorPath): string => {
      const keys = path.split(".");
      const result = keys.reduce(
        (acc, key) => {
          return acc[key as keyof typeof acc] as ColorRecord;
        },
        color as unknown as ColorRecord,
      );
      return result as unknown as string;
    },
    [color],
  );

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

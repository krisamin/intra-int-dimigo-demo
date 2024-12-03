import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { useTheme } from "contexts/theme";
import { Navigation } from "navigations";

const App = () => {
  const { scheme, color } = useTheme();

  const colors = {
    primary: color.semantic.brand,
    background: color.background.root.regular,
    card: color.background.root.regular,
    text: color.content.neutral.primary,
    border: color.border.outline,
    notification: color.semantic.brand,
  };

  return (
    <Navigation
      linking={{
        enabled: "auto",
        prefixes: ["http://localhost:8080"],
      }}
      theme={
        scheme === "dark"
          ? {
              ...DarkTheme,
              colors,
            }
          : {
              ...DefaultTheme,
              colors,
            }
      }
    />
  );
};

export { App };

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Config } from "config";
import { AuthProvider } from "contexts/auth";
import { ThemeProvider } from "contexts/theme";

interface ProviderProps {
  children: React.ReactNode;
}
const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Config>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Config>
  );
};

export { Provider };

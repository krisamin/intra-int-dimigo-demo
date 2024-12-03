import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { App } from "app";
import { Config } from "config";
import { AuthProvider } from "contexts/auth";
import { ThemeProvider } from "contexts/theme";

const Provider = () => {
  return (
    <Config>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <AuthProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </AuthProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Config>
  );
};

export { Provider };

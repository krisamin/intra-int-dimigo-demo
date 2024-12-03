import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useIsAuthenticated, useIsNotAuthenticated } from "contexts/auth";

import { AuthStack } from "./auth";
import { TabsStack } from "./tabs";

const RootStack = createNativeStackNavigator({
  groups: {
    Authenticated: {
      if: useIsAuthenticated,
      screens: {
        tabs: {
          screen: TabsStack,
          linking: {
            path: "/",
          },
        },
      },
    },
    NotAuthenticated: {
      if: useIsNotAuthenticated,
      screens: {
        auth: AuthStack,
      },
    },
  },
  screenOptions: {
    headerShown: false,
    animation: "none",
  },
});

const Navigation = createStaticNavigation(RootStack);

export { Navigation };

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "screens/auth";

const AuthStack = createNativeStackNavigator({
  screens: {
    login: LoginScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});

export { AuthStack };

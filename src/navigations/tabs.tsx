import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Easing } from "react-native-reanimated";

import { DormitoryScreen, HomeScreen, MealScreen, ScheduleScreen, UserScreen } from "screens/tab";

const TabsStack = createBottomTabNavigator({
  screens: {
    home: HomeScreen,
    meal: MealScreen,
    dormitory: DormitoryScreen,
    schedule: ScheduleScreen,
    user: UserScreen,
  },
  screenOptions: {
    headerShown: false,
    animation: "shift",
    transitionSpec: {
      animation: "timing",
      config: {
        duration: 200,
        easing: Easing.out(Easing.circle),
      },
    },
    sceneStyleInterpolator: ({ current }) => ({
      sceneStyle: {
        opacity: current.progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0, 1, 0],
        }),
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [-16, 0, 16],
            }),
          },
        ],
      },
    }),
  },
});

export { TabsStack };

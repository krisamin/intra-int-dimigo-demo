import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
  },
});

export { TabsStack };

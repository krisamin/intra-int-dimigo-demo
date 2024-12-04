import type React from "react";

import type { IconName } from "components/assets";

import { type BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native-gesture-handler";
import { Easing } from "react-native-reanimated";

import { Icon } from "components/assets";
import { Text, VStack } from "components/patterns";
import { useTheme } from "contexts/theme";
import { DormitoryScreen, HomeScreen, MealScreen, ScheduleScreen, UserScreen } from "screens/tab";

interface Tab {
  name: string;
  icon: IconName;
}
const tabs: Tab[] = [
  { name: "홈", icon: "Home" },
  { name: "급식", icon: "RamenDining" },
  { name: "기숙사", icon: "MeetingRoom" },
  { name: "일정", icon: "CalendarMonth" },
  { name: "학생증", icon: "Badge" },
];

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const { color, insets } = useTheme();

  return (
    <VStack
      padding={[8, 8, insets.bottom || 8]}
      background="background.group.regular"
      style={{
        margin: -1,
        borderWidth: 1,
        borderColor: color.border.outline,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}>
      <FlatList
        data={state.routes}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          const selected = state.index === index;
          return (
            <VStack
              fill
              align="center"
              gap={4}
              on={{
                press: () => {
                  const event = navigation.emit({
                    type: "tabPress",
                    target: item.key,
                    canPreventDefault: true,
                  });

                  if (!selected && !event.defaultPrevented) {
                    navigation.navigate(item.name);
                  }
                },
              }}>
              <Icon
                name={tabs[index].icon}
                color={selected ? "content.neutral.primary" : "content.neutral.quarternary"}
                fill={selected}
              />
              <Text
                type={selected ? "footnote.strong" : "footnote.weak"}
                color={selected ? "content.neutral.primary" : "content.neutral.tertiary"}>
                {tabs[index].name}
              </Text>
            </VStack>
          );
        }}
        numColumns={state.routes.length}
        scrollEnabled={false}
      />
    </VStack>
  );
};

const TabsStack = createBottomTabNavigator({
  screens: {
    home: HomeScreen,
    meal: MealScreen,
    dormitory: DormitoryScreen,
    schedule: ScheduleScreen,
    user: UserScreen,
  },
  tabBar: (props) => <TabBar {...props} />,
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

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Tabs: {
    screen?: keyof TabParamList;
  };
  Instructions: undefined;
};

export type TabParamList = {
  Home: undefined;
  Links: undefined;
  Types: undefined;
  More: undefined;
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigation = NativeStackNavigationProp<TabParamList>;

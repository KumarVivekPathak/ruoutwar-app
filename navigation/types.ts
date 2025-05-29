import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Tabs: undefined;
  Instructions: undefined;
  Refusals: undefined;
  PersonWithDisability: undefined;
  SignOfDanger: undefined;
  AdditionalDetails: undefined;
  MediaFiles: undefined;
};

export type TabParamList = {
  Home: undefined;
  Links: undefined;
  Types: undefined;
  More: undefined;
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigation = NativeStackNavigationProp<TabParamList>;

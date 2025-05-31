import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
  Instructions: undefined;
  IndicateTypes: undefined;
  Refusals: { incidentId?: string };
  PersonWithDisability: undefined;
  SignOfDanger: undefined;
  AdditionalDetails: undefined;
  MediaFiles: undefined;
  InstructionLink: undefined;
  ResponseHandout: undefined;
  ResponseVideos: undefined;
  PreIncidentLinks: undefined;
  SafeAtWork: undefined;
  EvacuateNow: undefined;
  ShelterInPlace: undefined;
  PreparetoLeave: undefined;
  ManualInstruction: undefined;
};

export type TabParamList = {
  Home: undefined;
  Links: undefined;
  Types: undefined;
  More: undefined;
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigation = NativeStackNavigationProp<TabParamList>;

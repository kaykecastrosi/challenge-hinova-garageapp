import type { NavigatorScreenParams } from "@react-navigation/native";
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: NavigatorScreenParams;
      QueryGarages: NavigatorScreenParams;
      GarageDetails: NavigatorScreenParams;
      ReferFriend: NavigatorScreenParams;
    }
  }
}

export {};

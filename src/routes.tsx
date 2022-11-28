import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import QueryGaragesScreen from "./screens/QueryGarages";
import GarageDetailsScreen from "./screens/GarageDetails";
import ReferFriendScreen from "./screens/ReferFriend";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          options={{ animation: "slide_from_right" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="QueryGarages"
          options={{ animation: "slide_from_right" }}
          component={QueryGaragesScreen}
        />
        <Stack.Screen
          name="ReferFriend"
          options={{ animation: "slide_from_right" }}
          component={ReferFriendScreen}
        />
        <Stack.Screen
          name="GarageDetails"
          options={{ animation: "slide_from_right" }}
          component={GarageDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

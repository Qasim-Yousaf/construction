import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignInOption, OnBoarding, SignIn } from "../containers";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"OnBoarding"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignInOption" component={SignInOption} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>

      {/* <Drawer.Navigator initialRouteName="OnBoarding">
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ drawerLabel: "Dashboard" }}
        />
        <Drawer.Screen
          name="Category"
          component={Category}
          options={{ drawerLabel: "Category" }}
        />

        <Drawer.Screen
          name="SignInOption"
          component={SignInOption}
          options={{ drawerLabel: "SignInOption", headerShown: false }}
        />
        <Drawer.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ drawerLabel: "OnBoarding", headerShown: false }}
        />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigation;

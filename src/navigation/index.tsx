import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Dashboard from "../containers/Dashboard";
import Category from "../containers/Category";

type RootDrawerParamList = {
  Dashboard: undefined;
  Category: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Category" component={Category} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

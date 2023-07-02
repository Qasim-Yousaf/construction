import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard, Category } from "../containers";

type RootDrawerParamList = {
  Dashboard: undefined;
  Category: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

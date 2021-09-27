import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
import ChatList from "../pages/Zap/ChatList";
import Status from "../pages/Zap/Status";
import Calls from "../pages/Zap/Calls";
import { useNavigation } from "@react-navigation/core";

function MainTab() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: { backgroundColor: "#075E55" },
      headerShadowVisible: false,
      headerTintColor: "#fff",
      title: "WhatsApp",
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#075E55" },
        tabBarActiveTintColor: "#fff",
        tabBarIndicatorStyle: {
          backgroundColor: "#fafafa",
          height: 3,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
        },
        tabBarInactiveTintColor: "rgba(255,255,255,.6)",
      }}
    >
      <Tab.Screen
        name="ChatList"
        options={{ title: "Conversas" }}
        component={ChatList}
      />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen
        name="Calls"
        options={{ title: "Chamadas" }}
        component={Calls}
      />
    </Tab.Navigator>
  );
}

export default MainTab;

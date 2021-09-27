import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider from "./contexts/UserContext";
import NoteContextProvider from "./contexts/NoteContext";
import NotePreload from "./pages/Note/NotePreload";
import CreateNote from "./pages/Note/CreateNote";
import MainNote from "./pages/Note/MainNote";
import Note from "./pages/Note/Note";

import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NoteContextProvider>
      <UserContextProvider>
        <ExpoStatusBar style="light" backgroundColor="#064B46" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="NotePreload"
          >
            <Stack.Screen name="NotePreload" component={NotePreload} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="MainNote" component={MainNote} />
            <Stack.Screen name="CreateNote" component={CreateNote} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </NoteContextProvider>
  );
}

export default App;

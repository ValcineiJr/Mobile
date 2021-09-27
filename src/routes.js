import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { LogBox } from "react-native";
//Note
import NoteContextProvider from "./contexts/NoteContext";
import NotePreload from "./pages/Note/NotePreload";
import CreateNote from "./pages/Note/CreateNote";
import MainNote from "./pages/Note/MainNote";
import Note from "./pages/Note/Note";
//Zap
import UserContextProvider from "./contexts/UserContext";
import Calls from "./pages/Zap/Calls";
import Chat from "./pages/Zap/Chat";
import Login from "./pages/Zap/Login";
import ChatList from "./pages/Zap/ChatList";
import Status from "./pages/Zap/Status";
import NewChat from "./pages/Zap/NewChat";
import MainTab from "./stacks/MainTab";

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NoteContextProvider>
      <UserContextProvider>
        <ExpoStatusBar style="light" backgroundColor="#252525" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="NotePreload"
          >
            <Stack.Screen name="NotePreload" component={NotePreload} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="MainNote" component={MainNote} />
            <Stack.Screen name="CreateNote" component={CreateNote} />
            {/* Zap */}
            <Stack.Screen name="Calls" component={Calls} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Status" component={Status} />
            <Stack.Screen name="NewChat" component={NewChat} />
            <Stack.Screen name="ChatList" component={ChatList} />
            <Stack.Screen name="MainTab" component={MainTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </NoteContextProvider>
  );
}

export default App;

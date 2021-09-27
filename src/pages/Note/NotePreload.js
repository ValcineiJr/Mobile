import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { NoteContext } from "../../contexts/NoteContext";
import { useNavigation } from "@react-navigation/core";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

// import { Container } from './styles';

const NotePreload = () => {
  const navigation = useNavigation();
  const [isConnected, setIsConnected] = useState(false);
  const { state, dispatch: noteDispatch } = useContext(NoteContext);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // console.log("Connection type", state.type);
      noteDispatch({
        type: "setOnline",
        payload: {
          online: state.isConnected,
        },
      });
    });
    unsubscribe();
    navigation.reset({
      routes: [{ name: "MainNote" }],
    });
  }, []);

  return <ExpoStatusBar style="light" backgroundColor="#ff3" />;
};

export default NotePreload;

import React from "react";

import {
  Entypo,
  Foundation,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";

import NavIcon from "../navIcon";
import { useState } from "react";
import { Link, router } from "expo-router";

const Navigation = () => {
  const [activeIcon, setActiveIcon] = useState("");
  const [changeColor, setChangeColor] = useState(false);

  const setSelected = (name: string) => {
    const routes: { [key: string]: string } = {
      home: "/home/profile",
      info: "/home/about",
      settings: "/home/settings",
      calendar: "home/appointments",
    };
    router.push(routes[name]);
    setActiveIcon(name);
    setChangeColor(!changeColor);
  };

  return (
    <View className=" overflow-visible absolute bottom-0 left-0 right-0 mt-auto flex">
      <View className="overflow-visible bg-blood flex-row justify-between items-center h-[81px] px-4 ">
        <TouchableOpacity onPress={() => setSelected("info")}>
          <NavIcon selected={activeIcon === "info"}>
            <Foundation name="info" size={50} color="white" />
          </NavIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("calendar")}>
          <NavIcon selected={activeIcon === "calendar"}>
            <Ionicons name="calendar" size={40} color="white" />
          </NavIcon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected("home")}>
          <NavIcon selected={activeIcon === "home"}>
            <Entypo name="home" size={44} color="white" />
          </NavIcon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected("settings")}>
          <NavIcon selected={activeIcon === "settings"}>
            <MaterialIcons name="settings" size={44} color="white" />
          </NavIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;

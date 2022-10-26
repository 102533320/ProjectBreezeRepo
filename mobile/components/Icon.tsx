import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  onPress,
  name,
  size = 40,
  backgroundColor = "transparent",
  iconColor = "#000",
}: any) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: 52,
          height: 52,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#E5E5E5",
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.6}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Icon;

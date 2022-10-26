import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import React from "react";

import AppText from "../AppText";

function PickerItem({ item, activeItem, onPress }: any) {
  const backgroundColor = item.id === activeItem.id ? "#8A7DFF" : "#fff";
  const color = item.id === activeItem.id ? "#fff" : "#000";
  const iconcolor = item.id === activeItem.id ? "#fff" : "#ADAFBB";
  const boldText = item.id === activeItem.id ? "bold" : "normal";
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.button, { backgroundColor: backgroundColor }]}>
          <AppText style={{ color: color, fontWeight: boldText }}>
            {item.title}
          </AppText>
          <MaterialCommunityIcons name="check" size={25} color={iconcolor} />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "space-between",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 58,
    borderWidth: 1,
    borderColor: "#E8E6EA",
    borderRadius: 15,
  },
});
export default PickerItem;

import React from "react";
import { StyleSheet, Pressable } from "react-native";
import AppText from "./AppText";
function AppButton({ title, style, color = "#fff", onPress }: any) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#b4abff" : "#8A7DFF",
        },
        styles.button,
        style,
      ]}
      onPress={onPress}
    >
      <AppText style={[styles.text, { color: color }]}>{title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    borderColor: "#E8E6EA",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    height: 58,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AppButton;

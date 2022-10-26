import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style }: any) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontSize: 16,
  },
});

export default AppText;

import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }: any) {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: "white" }]}>
      <View style={[{ flex: 1 }, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;

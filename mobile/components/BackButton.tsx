import React from "react";
import { View } from "react-native";
import Icon from "./Icon";

function BackButton({ navigation }: any) {
  return (
    <View style={{ alignSelf: "flex-start" }}>
      <Icon
        name="chevron-left"
        size={60}
        iconColor="#8A7DFF"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default BackButton;

import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import AppText from "./AppText";

function Hyperlink({
  title,
  fontSize = 12,
  fontWeight = "normal",
  onPress,
}: any) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <AppText
          style={[
            styles.hyperlink,
            { fontSize: fontSize, fontWeight: fontWeight },
          ]}
        >
          {title}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  hyperlink: {
    color: "#8A7DFF",
  },
});

export default Hyperlink;

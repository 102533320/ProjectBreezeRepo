import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import AppText from "../AppText";

function InterestItemSetting({ item, data, onSelect }: any) {
  let current: number = -1;
  let isActive = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].interest === item.interest) {
      current = i;
      isActive = data[i].active;
      break;
    }
  }
  let iconBackground = isActive ? "white" : "#8A7DFF";
  let fontColor = isActive ? "white" : "black";
  let fontWeight = isActive ? "bold" : "normal";
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        data[current].active = !data[current].active;
        onSelect([...data]);
      }}
    >
      <View
        style={[
          data[current].active ? styles.itemActive : styles.itemInactive,
          styles.item,
        ]}
      >
        <MaterialCommunityIcons
          name={item.icon}
          color={iconBackground}
          size={20}
        />
        <AppText
          style={{
            fontSize: 14,
            color: fontColor,
            fontWeight: fontWeight,
            marginLeft: 5,
          }}
        >
          {item.interest}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 5,
    borderWidth: 1,
    borderColor: "#E8E6EA",
    borderRadius: 15,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width:150,
  },
  itemInactive: {
    backgroundColor: "white",
  },
  itemActive: {
    margin: 2,
    borderWidth: 1,
    borderColor: "#E8E6EA",
    borderRadius: 15,
    height: 45,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8A7DFF",
  },
});

export default InterestItemSetting;

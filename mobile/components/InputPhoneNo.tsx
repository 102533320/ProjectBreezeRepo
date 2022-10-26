import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import RegionPicker from "./RegionPicker";

function InputPhoneNo({ setRegion, activeRegion, regions, ...others }: any) {
  return (
    <>
      <View style={styles.container}>
        {/* region picker */}
        <RegionPicker
          setRegion={setRegion}
          activeRegion={activeRegion}
          regions={regions}
        />

        {/* Vertical line */}
        <View style={styles.line} />
        {/* number input */}
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          {...others}
          // value={initialNumber}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: "#E8E6EA",
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 58,
  },
  input: {
    marginHorizontal: 15,
    fontSize: 18,
    flex: 1,
    height: "100%",
  },
  line: {
    borderWidth: 1,
    borderColor: "#E8E6EA",
    height: 18,
  },
  picker: {
    paddingLeft: 15,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default InputPhoneNo;

import React, { useRef, useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  FlatList,
  TextInput,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Screen from "./Screen";
import Icon from "./Icon";

function RegionPicker({ setRegion, activeRegion, regions }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTxt, setSearchtxt] = useState("");
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {/* region picker */}
          <View style={styles.picker}>
            <AppText style={{ fontSize: 16 }}>
              {activeRegion.code} ({activeRegion.dial_code})
            </AppText>
            <MaterialCommunityIcons
              name="chevron-down"
              color="#000"
              size={40 * 0.5}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Modal region list */}
      <Modal visible={modalVisible} animationType="slide">
        <>
          {/* Top Search bar & close button */}
          <View style={styles.modalTopBar}>
            <Icon
              name="arrow-left"
              iconColor="#cacaca"
              size={50}
              onPress={() => setModalVisible(false)}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              style={styles.modalSearchInput}
              value={searchTxt}
              onChangeText={(text) => setSearchtxt(text)}
              placeholder="Search"
            />
          </View>
          <FlatList
            data={regions.filter(({ name }: any) =>
              name.toLowerCase().includes(searchTxt)
            )}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  setRegion(item);
                  setModalVisible(false);
                }}
              >
                <View style={styles.selectableItem}>
                  <AppText
                    style={[
                      styles.countryValue,
                      { flex: 3, textAlign: "left" },
                    ]}
                  >
                    {item.name}
                  </AppText>
                  <AppText
                    style={[
                      styles.countryValue,
                      { flex: 1, textAlign: "right" },
                    ]}
                  >
                    {item.dial_code}
                  </AppText>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  modalTopBar: {
    borderBottomWidth: 1,
    borderColor: "#eeeeee",
    elevation: 5,
    backgroundColor: "#fafafa",
    width: "100%",
    height: 58,
    alignItems: "center",
    flexDirection: "row",
  },
  modalSearchInput: {
    height: "100%",
    fontSize: 20,
    flex: 1,
    color: "#999999",
    marginLeft: 15,
  },
  picker: {
    paddingLeft: 15,
    paddingRight: 5,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  selectableItem: {
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  countryValue: {
    fontSize: 20,
    color: "#999999",
  },
});

export default RegionPicker;

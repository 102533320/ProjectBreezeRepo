import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import AppButton from "./AppButton";
import AppText from "./AppText";

function BirthdayPicker({ birthday, setBirthday }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Calendar Button */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.birthday}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={20}
            color="#8A7DFF"
          />
          <AppText
            style={{ marginLeft: 15, color: "#8A7DFF", fontWeight: "bold" }}
          >
            {birthday !== undefined
              ? new Date(birthday?.toString()).toDateString()
              : "Choose birthday date"}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      {/* Calendar modal screen */}
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.modalCalendar}>
            <CalendarPicker
              selectedDayColor="#8A7DFF"
              selectedDayTextColor="white"
              showDayStragglers
              onDateChange={(d: any) => {
                // console.log(d.toDateString() as Date);
                setBirthday(d.toString());
              }}
              monthYearHeaderWrapperStyle={styles.calendarHeader}
              monthTitleStyle={styles.monthTitle}
              yearTitleStyle={styles.yearTitle}
              previousComponent={
                <MaterialCommunityIcons name="chevron-left" size={35} />
              }
              nextComponent={
                <MaterialCommunityIcons name="chevron-right" size={35} />
              }
              dayLabelsWrapper={{}}
            />
          </View>
          <View style={styles.modalButton}>
            <AppButton
              title="Save"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  calendarHeader: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  monthTitle: {
    fontSize: 14,
    color: "#8A7DFF",
  },
  yearTitle: {
    fontSize: 34,
    color: "#8A7DFF",
  },
  modalText: {
    backgroundColor: "white",
    flex: 0.06,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  birthday: {
    height: 58,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#e5e2ff",
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: "white",
    flex: 0.11,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  modalCalendar: {
    backgroundColor: "white",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    justifyContent: "flex-end",
    flex: 0.45,
  },
  modalContent: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default BirthdayPicker;

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity ,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import AppButton from "./AppButton";

function BirthdayPickerSetting({ birthday, setBirthday }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (

      <View>
      <TouchableOpacity 
       style={styles.dropDownstyle}
       onPress={() => setModalVisible(true)}>
          <Text>
            {birthday !== undefined
              ? new Date(birthday?.toString()).toDateString()
              : "Choose birthday date"}
          </Text>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={20}
            color="grey"
          />
      </TouchableOpacity >
      {/* Calendar modal screen */}
       
       {modalVisible && (<View style={styles.option}>
            <CalendarPicker
            width={340}
              selectedDayColor="#8A7DFF"
              selectedDayTextColor="white"
              showDayStragglers
              onDateChange={(d: any) => {
                // console.log(d.toDateString() as Date);
                setBirthday(d.toString());
                setModalVisible(false);
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
        </View>)}
      </View>
    
  );
}

const styles = StyleSheet.create({
  calendarHeader: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  monthTitle: {
    fontSize: 12,
    color: "#8A7DFF",
  },
  yearTitle: {
    fontSize: 23,
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
  dropDownstyle:{
    backgroundColor: "white",
    padding: 8,
    width:"80%",
    left: 35,
    borderRadius:5,
    borderWidth:2,
    borderColor:"#E5E5E5",
    minHeight:42,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
  },
  option:{
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    width:"80%",
    left: 35,
    marginTop:9,
  },
});

export default BirthdayPickerSetting;

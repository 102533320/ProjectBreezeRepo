import { StyleSheet,FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View, TextInput} from "react-native";
import * as React from "react";
import * as Yup from "yup";
import Header  from "../../components/Header";
import DropDown from "../../components/DropDown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BirthdayPickerSetting from "../../components/BirthdayPickerSetting";

const validationSchema = Yup.object().shape({
  selectedId: Yup.object().required().label("Gender"),
});


export default function Birthday({
  navigation,
}) {
    const [birthday,setBirthday] = React.useState("");
  return (
    <View style={styles.container}>
      <Header title="Birthday" navigation={navigation}/>
      <BirthdayPickerSetting birthday={birthday} setBirthday={setBirthday}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  }, 

});

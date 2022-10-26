import { StyleSheet,FlatList, Text, TouchableOpacity, View, TextInput} from "react-native";
import * as React from "react";
import * as Yup from "yup";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import PickerItem from "../../components/form/PickerItem";
import { AppForm, FormPicker, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header  from "../../components/Header";


const validationSchema = Yup.object().shape({
  selectedId: Yup.object().required().label("Gender"),
});



export default function NameScreen({
  navigation,
}) {
    const [fname,onChangefname] = React.useState("Tan");
    const [fcolor,onChangefColor] = React.useState("white");
    const [lcolor,onChangelColor] = React.useState("white");
    const [lname,onChnagelname] = React.useState("France");
    const [fwidth, onChangefwidth]=React.useState(2);
    const [lwidth, onChangelwidth]=React.useState(2);
  return (
    <View style={styles.container}>
      <Header title="Name" navigation={navigation}/>
       <View style={styles.inputfield}>
        <Text style={styles.text}>First Name</Text>
        <TextInput
             onBlur={() => {
                onChangefColor("white");
                onChangefwidth(2);
             }}
             onFocus={() => {
                onChangefColor("#e5e2ff");
                onChangefwidth(0);
             }}
             style={[{backgroundColor: fcolor, borderWidth:fwidth},styles.input]}
            onChangeText={onChangefname}
            value={fname}
        />
       </View>
       <View style={styles.inputfield}>
        <Text style={styles.text}>Last Name</Text>
        <TextInput
            onBlur={() => {
                onChangelColor("white");
                onChangelwidth(2);
            }}
            onFocus={() => {
                onChangelColor("#e5e2ff");
                onChangelwidth(0);
            }}
            style={[{backgroundColor: lcolor, borderWidth:lwidth},styles.input]}
            onChangeText={onChnagelname}
            value={lname}
        />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "space-between",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 58,
    borderWidth: 1,
    borderColor: "#E8E6EA",
    borderRadius: 15,
  },
  container: {
    flex:1,
    backgroundColor: "white",
  },
  heading: {
    marginTop: "10%",
    color: "black",
    fontWeight: "bold",
    fontSize: 34,
  },
  option: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    height: 60,
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius:5,
    borderColor: "#E8E6EA",
    fontWeight: "bold",
  },
  inputfield:{
    width:"80%",
    left: 40,
    marginBottom:20,
  },
  text:{
    fontSize:13,
    color:"#8A7DFF",
  }
});

import { StyleSheet,FlatList, Text, TouchableOpacity, View } from "react-native";
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

const DATA = [
    {  title: "Basic Info",  navigate: "BasicInfo" },
    {  title: "Account Info", navigate: "AccountInfo" },
    {  title: "Matching Info", navigate: "MatchingInfo" },
    
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress}>
     <View style={[styles.option, { backgroundColor: backgroundColor  }]}>
          <AppText style={{ color: textColor, fontWeight: "bold" }}>
            {item.title}
          </AppText>
          <MaterialCommunityIcons name="chevron-right" size={25} color="#8A7DFF" />
        </View>
  </TouchableOpacity>
);

export default function AccountScreen({
  navigation,
}) {
  return (
    <View style={styles.container}>
      <Header title="Account" navigation={navigation}/>
        <FlatList
          data={DATA}
          renderItem={({ item }: any) => (
            <Item
              item ={item}
              onPress={() => {navigation.navigate(item.navigate)}}
              backgroundColor={"white"}
              textColor={"black"}
            />
          )}
          keyExtractor={(item) => item.title}
        />
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
    height: 50,
  },
});

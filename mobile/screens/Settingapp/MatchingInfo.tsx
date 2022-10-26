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
    {  title: "Age Pref.",  navigate: "AgePref", subtitle:"30 - 40" },
    {  title: "Gender Pref.", navigate: "GenderPref",subtitle:"Male" },
    {  title: "Interests", navigate: "Interest", subtitle:"Shopping, Running, Travelling" },
    
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress}>
     <View style={[styles.option, { backgroundColor: backgroundColor  }]}>
        <View>
          <AppText style={{ color: textColor, fontWeight: "bold"}}>
            {item.title}
          </AppText>
          <Text style={{fontSize:14}}>{item.subtitle}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} color="#8A7DFF" />
        </View>
  </TouchableOpacity>
);

export default function MatchingScreen({
  navigation,
}) {
  return (
    <View style={styles.container}>
      <Header title="Matching Info" navigation={navigation}/>
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

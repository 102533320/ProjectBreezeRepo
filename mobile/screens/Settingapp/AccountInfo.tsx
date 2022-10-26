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
    {  title: "Linked Account", navigate: "LinkedAccount", subtitle:"tanFrance@gmail.com" },
    {  title: "Password", navigate: "Password", subtitle:"************"},
];

const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1.1,
          width: "87%",
          left: 20,
          backgroundColor: "#E5E5E5",
        }}
      />
    );
  }

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress}>
     <View style={[styles.option, { backgroundColor: backgroundColor }]}>
          <View>
          <AppText style={{ color: textColor, fontWeight: "bold"}}>
            {item.title}
          </AppText>
          <Text style={{fontSize:14}}>{item.subtitle}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={30} color="#8A7DFF" />
        </View>
  </TouchableOpacity>
);

export default function AccountInfoScreen({
  navigation,
}) {
  return (
    <View style={styles.container}>
      <Header title="Account Info" navigation={navigation}/>
        <FlatList
          data={DATA}
          renderItem={({ item }: any) => (
            <Item
              item ={item}
              onPress={() => console.log(item.navigate)}
              backgroundColor={"white"}
              textColor={"black"}
            />
          )}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ItemDivider}
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
    height: 60,
  },
});

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
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const validationSchema = Yup.object().shape({
  selectedId: Yup.object().required().label("Gender"),
});

const DATA = [
    {
      id:77,
      title: "Male",
    },
    {
      id:88,
      title: "Female",
    },
    {
      id:99,
      title: "Other",
    },
  ];

export default function GenderPrefScreen({
  navigation,
}) {

  return (
    <View style={styles.container}>
      <Header title="Gender Pref." navigation={navigation}/>
      <View style={styles.option}>
      <AppForm
        initialValues={{ gender: "" }}
        onSubmit={(values) => {
          // console.log(route.params);
          console.log(values)}
        }
        //onSubmit={() => console.log(route.params)}
        validationSchema={validationSchema}
      >
        <FormPicker
          name="gender"
          data={DATA}
          keyExtractor={(item: any) => item.id}
        />
      </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  }, 
  option:{
    width:"80%",
    left: 40,
    marginBottom:30,
  },
});

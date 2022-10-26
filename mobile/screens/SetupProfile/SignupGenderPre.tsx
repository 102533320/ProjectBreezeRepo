import { StyleSheet, View, FlatList } from "react-native";
import * as React from "react";
import * as Yup from "yup";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { AppForm, FormPicker, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";

const validationSchema = Yup.object().shape({
  preference: Yup.string().required().label("Gender"),
});

const DATA = [
  {
    id: "4",
    title: "Male",
  },
  {
    id: "5",
    title: "Female",
  },
  {
    id: "6",
    title: "Other",
  },
];

export default function GenderpreScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <AppText style={styles.heading}>Your preference</AppText>

      <AppForm
        initialValues={{ preference: "" }}
        onSubmit={(values) => {
          console.log(route.params);
          navigation.navigate("SignupAge", {
            ...route.params,
            ...values,
          });
        }}
        //onSubmit={() => console.log(route.params)}
        validationSchema={validationSchema}
      >
        <FormPicker
          name="preference"
          data={DATA}
          keyExtractor={(item: any) => item.id}
        />

        <SubmitButton title="Continue" />
      </AppForm>
    </Screen>
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
    padding: 30,
    backgroundColor: "white",
  },
  heading: {
    marginTop: "10%",
    color: "black",
    fontWeight: "bold",
    fontSize: 34,
  },
});

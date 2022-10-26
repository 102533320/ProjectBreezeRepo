import { StyleSheet } from "react-native";
import * as React from "react";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { AppForm, FormPicker, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";

const validationSchema = Yup.object().shape({
  gender: Yup.string().required().label("Gender"),
});

const DATA = [
  {
    id: "1",
    title: "Male",
  },
  {
    id: "2",
    title: "Female",
  },
  {
    id: "3",
    title: "Other",
  },
];

export default function GenderScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <AppText style={styles.heading}>I am a</AppText>

      <AppForm
        initialValues={{ gender: "" }}
        onSubmit={(values) => {
          // console.log(route.params);
          console.log(route.params);
          navigation.navigate("SignupGenderPreference", {
            ...route.params,
            ...values,
          });
        }}
        //onSubmit={() => console.log(route.params)}
        validationSchema={validationSchema}
      >
        <FormPicker
          name="gender"
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

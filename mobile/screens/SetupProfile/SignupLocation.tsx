import { StyleSheet, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { AppForm, LocationField, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";

const validationSchema = Yup.object().shape({
  location: Yup.object().required().label("Location"),
});

export default function LocationScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <View
        style={{
          width: "100%",
          marginBottom: 20,
        }}
      >
        <AppText style={styles.heading}>Set your location</AppText>
        <AppText>You can change this later</AppText>
      </View>

      <AppForm
        initialValues={{ location: "" }}
        onSubmit={(values) => {
          console.log(route.params),
            navigation.navigate("SignupInterest", {
              ...route.params,
              ...values,
            });
        }}
        validationSchema={validationSchema}
      >
        <LocationField name="location" />

        <SubmitButton title="Continue" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "white",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 34,
  },
});

const locationStyle = StyleSheet.create({
  container: {
    flex: 1,
    // height: 450,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderTopEndRadius: 15,
    borderColor: "#E8E6EA",
    borderRadius: 15,
    height: 58,
  },
  textInput: {
    backgroundColor: "transparent",
    color: "black",
    borderRadius: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 14,
    flex: 1,
  },
});

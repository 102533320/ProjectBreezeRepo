import { StyleSheet } from "react-native";
import * as React from "react";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { AppForm, FormPicker, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";
import API from "../../api/user";
import Cognito from "../../auth/CognitoAuth";
import Auth from "../../auth/context";
import { useContext } from "react";

const validationSchema = Yup.object().shape({
  personality: Yup.string().required().label("Personality"),
});

const DATA = [
  {
    id: "7",
    title: "Extrovert",
  },
  {
    id: "8",
    title: "Introvert",
  },
];

const userModel = (object: any) => {
  return {
    match_details: {
      birthday: new Date(object["birthday"]).toISOString(),
      gender: object["gender"],
      preference: object["preference"],
      location: object["location"],
      interests: object["interests"],
      personality: object["personality"],
    },
    user: {
      _id: object["id"],
      photos: object["photos"],
      first_name: object["firstName"],
      last_name: object["lastName"],
      email: object["email"],
    },
  };
};

export default function PersonalityScreen({ navigation, route }) {
  const auth = useContext(Auth.Authenticated);

  const CompleteSignup = async (model: any) => {
    const result = await API.postUser(userModel(model));
    if (result.ok) {
      Cognito.completeSignup().then(() => {
        auth["setAuthenticated"](Auth.AuthState.Login);
      });
    } else console.log(result);
  };

  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <AppText style={styles.heading}>Your preference</AppText>
      <AppForm
        initialValues={{ personality: "" }}
        onSubmit={(value) => {
          const model = {
            ...route.params,
            ...value,
            photos: ["uri"],
          };
          CompleteSignup(model);
        }}
        validationSchema={validationSchema}
      >
        <FormPicker
          name="personality"
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

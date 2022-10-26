import { StyleSheet, Image, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";

import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import Hyperlink from "../../components/Hyperlink";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/form";
import BackButton from "../../components/BackButton";
import Cognito from "../../auth/CognitoAuth";
import context from "../../auth/context";
// import ErrorMessage from "../components/form/ErrorMessage";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const [error, setError] = React.useState(false);
  const auth = React.useContext(context.Authenticated);

  const signIn = async ({ email, password }) => {
    Cognito.signIn(email, password)
      .then(({ attributes }) => {
        setError(false);
        if (attributes["custom:completed"] === "true") {
          auth["setAuthenticated"](context.AuthState.Login);
        } else auth["setAuthenticated"](context.AuthState.Setup);
      })
      .catch(() => {
        return setError(true);
      });
  };

  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <Image
        source={require("../../assets/images/breeze.png")}
        style={styles.image}
      />

      <AppText style={styles.title}>Login to continue</AppText>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={signIn}
        validationSchema={validationSchema}
      >
        <ErrorMessage visible={error} error={"Email or Password incorrect!"} />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="Email"
        />
        <AppFormField
          name="password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="password"
        />

        <SubmitButton title={"Login"} />
      </AppForm>

      <View style={{ marginTop: 74 }}>
        <Hyperlink
          title="Dont have an account? Sign Up Now"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>

      <View style={{ marginTop: 58 }}>
        <Hyperlink
          title="Forgot Password?"
          onPress={() => navigation.navigate("ResetPassword")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: "15%",
  },
  input: {
    borderColor: "#E8E6EA",
    marginTop: 30,
    width: "100%",
    height: 58,
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 78,
  },
});

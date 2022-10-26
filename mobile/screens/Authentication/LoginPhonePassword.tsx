import { StyleSheet, Image, View, TextInput } from "react-native";
import * as React from "react";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import Hyperlink from "../../components/Hyperlink";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/form";
import BackButton from "../../components/BackButton";
import context from "../../auth/context";
import Cognito from "../../auth/CognitoAuth";
const validationSchema = Yup.object().shape({
  password: Yup.string().required().label("Password"),
});

export default function LoginPhonePassword({ navigation, route }) {
  const [error, setError] = React.useState(false);
  const auth = React.useContext(context.Authenticated);

  Cognito.onSignIn(({ attributes }) => {});

  const signIn = async (number, password) => {
    Cognito.signIn(number, password)
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

      <AppText style={styles.title}>Enter your password</AppText>

      <AppForm
        initialValues={{ password: "" }}
        onSubmit={({ password }) => signIn(route.params["number"], password)}
        validationSchema={validationSchema}
      >
        <ErrorMessage visible={error} error={"Number or Password incorrect!"} />
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

      <View style={{ marginTop: 91 }}>
        <Hyperlink
          title="Dont have an account? Sign Up Now"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>

      <View style={{ marginTop: 65 }}>
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
    marginTop: 46,
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

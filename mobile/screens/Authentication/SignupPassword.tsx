import { StyleSheet, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../../components/form";
import BackButton from "../../components/BackButton";
import Cognito from "../../auth/CognitoAuth";
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must have at least one lower-case, one upper-case and a digit"
    )
    .label("Password"),
});

export default function SignupPassword({ navigation, route }) {
  const [error, setError] = React.useState(false);

  Cognito.onSignUp(() =>
    navigation.navigate("ConfirmSignup", { ...route.params })
  );

  const signUp = async (user, password) => {
    try {
      const result = await Cognito.signUp(user, password);
      if (result) setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <View style={styles.titleBox}>
        <AppText style={styles.title}>Enter your password</AppText>
        <AppText style={styles.description}>
          Please set a new password. We will send you a 4-digit code to verify
          your account.
        </AppText>
      </View>

      <AppForm
        initialValues={{ password: "" }}
        onSubmit={(values) => {
          signUp(route.params["user"], values.password);
        }}
        validationSchema={validationSchema}
      >
        <ErrorMessage visible={error} error={"Account already registered!"} />
        <AppFormField
          name="password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="password"
        />
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
  description: {
    fontSize: 14,
    marginTop: 15,
  },
  input: {
    borderColor: "#E8E6EA",
    marginTop: 32,
    width: "100%",
    height: 58,
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleBox: {
    marginTop: 112,
  },
});

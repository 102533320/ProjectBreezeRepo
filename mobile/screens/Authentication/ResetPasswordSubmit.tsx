import { StyleSheet, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";
import { useRoute } from "@react-navigation/native";
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
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm password"),
});

export default function ResetPasswordSubmit({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <View style={styles.titleBox}>
        <AppText style={styles.title}>Forget your password?</AppText>
        <AppText style={styles.description}>
          Confirm your email address and we will send you a link.
        </AppText>
      </View>

      <AppForm
        initialValues={{ password: "", confirmPassword: "", code: "" }}
        onSubmit={(values) =>
          Cognito.forgotPasswordSubmit(
            route.params["email"],
            values.code,
            values.password
          )
            .then(() => {
              //Add Navigation
              console.log("Success!");
            })
            .catch((err) => {
              console.log(err);
            })
        }
        validationSchema={validationSchema}
      >
        <AppFormField
          name="password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="Password"
        />

        <AppFormField
          name="confirmPassword"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="Confirm password"
        />

        <AppFormField
          name="code"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="Code"
        />
        <SubmitButton title="Save Password" />
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

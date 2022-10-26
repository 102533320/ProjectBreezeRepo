import { StyleSheet, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";
import Cognito from "../../auth/CognitoAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export default function ResetPassword({
  navigation,
}: RootStackScreenProps<"ResetPassword">) {
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
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          Cognito.forgotPassword(values.email)
            .then(() => {
              navigation.navigate("ResetPasswordSubmit", values);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        validationSchema={validationSchema}
      >
        {/* Email field */}
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="Email"
        />
        <SubmitButton title="Reset Password" />
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

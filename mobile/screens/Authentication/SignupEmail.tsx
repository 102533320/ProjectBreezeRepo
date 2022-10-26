import { StyleSheet, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export default function SignupEmail({ navigation }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.titleBox}>
        <AppText style={styles.title}>E-mail</AppText>
        <AppText style={styles.description}>
          Please enter a valid e-mail address. We will send you a 4-digit code
          to verify your account.
        </AppText>
      </View>

      <AppForm
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          navigation.navigate("SignupPassword", { user: values.email });
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          style={styles.input}
          placeholder="Email"
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
    fontSize: 34,
    fontWeight: "bold",
  },
  titleBox: {
    marginTop: 112,
  },
  description: {
    fontSize: 14,
  },
});

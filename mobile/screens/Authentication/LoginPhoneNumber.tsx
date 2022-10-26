import { StyleSheet, Image, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";

import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Hyperlink from "../../components/Hyperlink";
import InputPhoneNo from "../../components/InputPhoneNo";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppMobileField,
} from "../../components/form";
import CountryCodes from "../../config/CountryCodes.json";
import BackButton from "../../components/BackButton";
const validationSchema = Yup.object().shape({
  number: Yup.string().required().min(9).label("Number"),
});

export default function LoginPhoneNumber({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <Image
        source={require("../../assets/images/breeze.png")}
        style={styles.image}
      />

      <AppText style={styles.title}>Enter your phone number</AppText>

      <AppForm
        initialValues={{
          number: "",
          region: CountryCodes.find((country) => country.code === "AU"),
        }}
        onSubmit={(values: any) => {
          navigation.navigate("LoginPhonePassword", { number: values.number });
        }}
        validationSchema={validationSchema}
      >
        {/* Phone number field */}
        <View style={{ marginTop: 46 }}>
          <AppMobileField
            name="number"
            activeRegion="region"
            regions={CountryCodes}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="off"
            placeholder="Phone number"
            maxLength={9}
          />
        </View>
        <SubmitButton title={"Continue"} />
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
          onPress={() => navigation.navigate("ResetPassword")} //Add Navigation
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 78,
  },
});

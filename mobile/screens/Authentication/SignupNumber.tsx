import { StyleSheet, View } from "react-native";
import * as React from "react";
import * as Yup from "yup";

import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
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

export default function SignupNumber({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <View style={styles.titleBox}>
        <AppText style={styles.title}>My mobile</AppText>
        <AppText style={styles.description}>
          Please enter your valid phone number. We will send you a 4-digit code
          to verify your account.
        </AppText>
      </View>

      <AppForm
        initialValues={{
          number: "",
          region: CountryCodes.find((country) => country.code === "AU"),
        }}
        onSubmit={(values: any) =>
          navigation.navigate("SignupPassword", { user: values.number })
        }
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: "15%",
  },
  inputNumber: {
    marginTop: 34,
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

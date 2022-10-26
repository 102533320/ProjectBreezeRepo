import { StyleSheet, Image, View } from "react-native";
import * as React from "react";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Hyperlink from "../../components/Hyperlink";
import Icon from "../../components/Icon";
export default function SignupScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../assets/images/breeze.png")}
        style={styles.image}
      />

      <AppText style={styles.title}>Sign up to continue</AppText>

      <AppButton
        title="Continue with email"
        style={[styles.buttonEmail, styles.button]}
        color="#8A7DFF"
        onPress={() => navigation.navigate("SignupEmail")} //Add Navigation
      />

      <AppButton
        title="Use phone number"
        style={styles.button}
        onPress={() => navigation.navigate("SignupNumber")} //Add Navigation
      />

      <AppText style={styles.signUpWith}>or sign up with</AppText>

      <View style={styles.icons}>
        <Icon
          onPress={() => console.log("Apple")}
          name="apple"
          size={56}
          iconColor="#8A7DFF"
          backgroundColor="transparent"
        />
        <Icon
          onPress={() => console.log("Facebook")}
          name="facebook"
          size={56}
          iconColor="#8A7DFF"
          backgroundColor="transparent"
        />

        <Icon
          onPress={() => console.log("Google")}
          name="google"
          size={56}
          iconColor="#8A7DFF"
          backgroundColor="transparent"
        />
      </View>

      <View style={{ marginTop: 29 }}>
        <Hyperlink
          title="Already have an account? Log in here."
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <View style={styles.policyBox}>
        <View style={styles.policiy}>
          <Hyperlink
            title="Terms of use"
            onPress={() => navigation.navigate("TermOfUse")} //Add Navigation
          />
        </View>

        <View style={styles.policiy}>
          <Hyperlink
            title="Privacy Policy"
            onPress={() => navigation.navigate("PrivacyPolicy")} //Add Navigation
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    marginTop: 26,
  },
  buttonEmail: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  icons: {
    marginTop: 23,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    justifyContent: "space-evenly",
  },
  policiy: {
    marginHorizontal: 14,
  },
  policyBox: {
    marginTop: 29,
    flexDirection: "row",
  },
  signUpWith: {
    fontSize: 12,
    marginTop: 65,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 78,
  },
  text: {
    fontSize: 12,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: "15%",
  },
});

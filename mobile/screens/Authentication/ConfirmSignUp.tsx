import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import Hyperlink from "../../components/Hyperlink";
import Icon from "../../components/Icon";
import InputOTP from "../../components/InputOTP";
import Cognito from "../../auth/CognitoAuth";
import BackButton from "../../components/BackButton";
import Auth from "../../auth/context";
export default function ConfirmSignup({ navigation, route }) {
  const [pins, setPins] = useState("");
  const auth = useContext(Auth.Authenticated);

  Cognito.onAutoSignIn(() => {
    auth["setAuthenticated"](Auth.AuthState.Setup);
  });

  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      {/* Title Text */}
      <AppText style={styles.title}>
        Type the verification code we’ve sent you
      </AppText>

      {/* OTP Box */}
      <View style={[styles.otpBox, { marginTop: 48 }]}>
        <InputOTP setState={setPins} />
      </View>

      <View style={styles.bottomBox}>
        {/* Resend confirmation code Hyperlink */}
        <View style={[styles.bottom, { marginBottom: 53 }]}>
          <Hyperlink
            title="Send Again"
            fontSize={16}
            fontWeight="bold"
            onPress={() =>
              Cognito.resendConfirmationCode(route.params["user"]).catch(
                (err) => {
                  console.log(err);
                }
              )
            }
          />
        </View>
        {/* Submit button (arrow) */}
        <View style={styles.bottom}>
          <Icon
            name="arrow-right"
            iconColor="#8A7DFF"
            size={60}
            onPress={() => {
              Cognito.confirmSignUp(route.params["user"], pins).catch((err) => {
                console.log(err);
              });
            }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "white",
  },

  bottom: {
    marginHorizontal: 88,
    marginBottom: 33,
  },

  bottomBox: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  otpBox: {},
  title: {
    fontSize: 18,
    marginTop: "30%",
    width: 232,
    alignSelf: "center",
    textAlign: "center",
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

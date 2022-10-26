import { StyleSheet, Image, View } from "react-native";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Hyperlink from "../../components/Hyperlink";
export default function HomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../assets/images/breeze.png")}
        style={styles.image}
      />
      <AppText style={styles.title}>Login to continue</AppText>

      <AppButton
        title="Email"
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      />

      <AppButton
        title="Phone Number"
        style={styles.button}
        onPress={() => navigation.navigate("LoginPhoneNumber")} //Fix Navigation
      />

      <View style={{ marginTop: 111 }}>
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

  button: {
    marginTop: 32,
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

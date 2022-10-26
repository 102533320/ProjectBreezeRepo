import { StyleSheet, Image, View, TextInput, Text } from "react-native";
import { Button } from "react-native-paper";
import * as React from "react";

import { RootStackScreenProps } from "../../types";
import CognitoAuth from "../../auth/CognitoAuth";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Hyperlink from "../../components/Hyperlink";
import Icon from "../../components/Icon";
import BackButton from "../../components/BackButton";

export default function PrivacypolicyScreen({
  navigation,
}: RootStackScreenProps<"PrivacyPolicy">) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />
      <View>
        <AppText style={styles.title}>PRIVACY POLICY</AppText>
        <AppText style={styles.description}>Last modified: May 6 2022</AppText>
        <Text style={styles.secondhead}>Duis ut diam</Text>
        <AppText style={styles.description}>
          Ut sem nulla pharetra diam. Imperdiet nulla malesuada pellentesque
          elit eget gravida cum sociis natoque. Fermentum et sollicitudin ac
          orci phasellus egestas tellus rutrum tellus.
        </AppText>

        <Text style={styles.secondhead}>Volutpat commodo sed</Text>
        <AppText style={styles.description}>
          Enim nunc faucibus a pellentesque sit amet porttitor. Fusce ut
          placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur
          adipiscing elit duis tristique sollicitudin. Egestas sed sed risus
          pretium quam vulputate dignissim. Eros in cursus turpis massa.
        </AppText>

        <Text style={styles.secondhead}>Vel pharetra vel</Text>
        <AppText style={styles.description}>
          tiam erat velit scelerisque in dictum non consectetur. Velit sed
          ullamcorper morbi tincidunt ornare massa eget egestas. Id leo in vitae
          turpis.
        </AppText>
      </View>
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
    width: "100%",
    height: 51,
    marginTop: "10%",
    textAlign: "left",
    color: "black",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 34,
  },
  titleBox: {
    marginTop: 112,
  },
  description: {
    fontSize: 14,
  },
  secondhead: {
    marginTop: 20,
    fontWeight: "bold",
    color: "#8A7DFF",
  },
});

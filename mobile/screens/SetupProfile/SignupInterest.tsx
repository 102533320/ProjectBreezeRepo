import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import { AppForm, SubmitButton, InterestsPicker } from "../../components/form";
import Interests from "../../config/Interests.json";
import BackButton from "../../components/BackButton";

const validationSchema = Yup.object().shape({
  interests: Yup.array().min(1).required().label("Interest"),
});

export default function InterestScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <AppText style={styles.heading}>Your interests</AppText>
      <AppText style={styles.description}>
        Select your interests, you may change this later.
      </AppText>

      <AppForm
        initialValues={{ interests: [] }}
        onSubmit={(value) => {
          console.log(value);
          navigation.navigate("SignupPersonality", {
            ...route.params,
            ...value,
          });
        }}
        validationSchema={validationSchema}
      >
        <View style={{ marginVertical: 32, height: "50%" }}>
          <InterestsPicker
            name="interests"
            data={Interests}
            keyExtractor={(item) => item.interest}
            numColumns={Interests.length}
            columnWrapperStyle={{ flexWrap: "wrap" }}
          />
        </View>

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
  heading: {
    marginTop: "16%",
    fontSize: 34,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
});

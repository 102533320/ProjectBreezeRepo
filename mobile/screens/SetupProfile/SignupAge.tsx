import { StyleSheet, View } from "react-native";
import * as React from "react";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import BackButton from "../../components/BackButton";
import { validateYupSchema } from "formik";

export default function AgeScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <BackButton navigation={navigation} />

      <View style={{ width: "100%" }}>
        <AppText style={styles.heading}>Age preference</AppText>
        <AppText>You can change this later</AppText>
      </View>

      <View style={{ width: "100%", marginTop: 177 }}>
        <View
          style={{
            // backgroundColor: "tomato",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <AppText>Age Range</AppText>
          <AppText style={{ fontWeight: "bold", color: "#A9A8A8" }}>
            18-60
          </AppText>
        </View>

        <View style={{ alignSelf: "center" }}>
          <MultiSlider
            onValuesChangeStart={() => console.log("Start")}
            onValuesChangeFinish={() => console.log("Finish")}
            enabledTwo
            min={18}
            max={60}
            values={[18, 60]}
            isMarkersSeparated={true}
            allowOverlap={false}
            snapped
            minMarkerOverlapDistance={35}
            enableLabel={true}
            selectedStyle={{
              backgroundColor: "#8A7DFF",
            }}
            customLabel={(s) => {
              return (
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      left: s["oneMarkerLeftPosition"] - 10,
                    }}
                  >
                    <AppText>{s["oneMarkerValue"]}</AppText>
                  </View>
                  <View
                    style={{
                      left: s["twoMarkerLeftPosition"] - 25,
                    }}
                  >
                    <AppText>{s["twoMarkerValue"]}</AppText>
                  </View>
                </View>
              );
            }}
            customMarkerLeft={(e) => {
              return (
                <View>
                  <View
                    style={{
                      width: 32,
                      height: 32,
                      backgroundColor: "#8A7DFF",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              );
            }}
            customMarkerRight={(e) => {
              return (
                <View>
                  <View
                    style={{
                      width: 32,
                      height: 32,
                      backgroundColor: "#8A7DFF",
                      borderRadius: 16,
                    }}
                  ></View>
                </View>
              );
            }}
          />
        </View>
      </View>

      <AppButton
        title="Continue"
        style={{ marginTop: 180 }}
        onPress={() => {
          console.log(route.params),
            navigation.navigate("SignupLocation", {
              ...route.params,
            });
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "white",
  },
  heading: {
    width: "100%",
    height: 51,
    marginTop: "10%",
    textAlign: "left",
    color: "black",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 34,
  },
});

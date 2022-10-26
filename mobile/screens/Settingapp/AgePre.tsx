import { StyleSheet,FlatList, Text, TouchableOpacity, View, TextInput} from "react-native";
import * as React from "react";
import * as Yup from "yup";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import PickerItem from "../../components/form/PickerItem";
import { AppForm, FormPicker, SubmitButton } from "../../components/form";
import BackButton from "../../components/BackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header  from "../../components/Header";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const validationSchema = Yup.object().shape({
  selectedId: Yup.object().required().label("Gender"),
});



export default function AgePreScreen({
  navigation,
}) {

  return (
    <View style={styles.container}>
      <Header title="Age Pref." navigation={navigation}/>
      
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
            markerOffsetY={4}
            trackStyle={{
              height: 10,
              borderRadius: 8,
            }}
            selectedStyle={{
              backgroundColor: "#895CDF",
            }}
            unselectedStyle={{
              backgroundColor: "#EEF3F7",
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
                      left: s["twoMarkerLeftPosition"] - 27,
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
                      width: 24,
                      height: 24,
                      backgroundColor: "white",
                      borderColor:"#895CDF",
                      borderRadius: 16,
                      borderWidth:1,
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
                      width: 24,
                      height: 24,
                      backgroundColor: "white",
                      borderColor:"#895CDF",
                      borderRadius: 16,
                      borderWidth:1,
                    }}
                  ></View>
                </View>
              );
            }}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  }, 
});

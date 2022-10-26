import { StyleSheet,FlatList, Text, TouchableOpacity, View, TextInput} from "react-native";
import * as React from "react";
import * as Yup from "yup";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import PickerItem from "../../components/form/PickerItem";
import { AppForm, FormPicker, SubmitButton, InterestsPicker } from "../../components/form";
import BackButton from "../../components/BackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header  from "../../components/Header";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Interests from "../../config/Interests.json";
import InterestSetting from "../../components/form/InterestSetting";
const validationSchema = Yup.object().shape({
  selectedId: Yup.object().required().label("Gender"),
});



export default function Interest({
  navigation,
}) {

  return (
    <View style={styles.container}>
      <Header title="Interest" navigation={navigation}/>
      <AppForm
        initialValues={{ interests: [] }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchema}
      >
        <View style={{  left:30, width:"83%" }}>
          <InterestSetting
            name="interests"
            data={Interests}
            keyExtractor={(item) => item.interest}
            numColumns="2"
            columnWrapperStyle={{ justifycontent: "space-between" }}
          />
        </View>
      </AppForm>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  }, 
});

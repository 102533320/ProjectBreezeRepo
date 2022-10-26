import { StyleSheet, Image, View, Modal } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useEffect, useState, useContext } from "react";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import AppCamera from "../../components/Camera";
import Cognito from "../../auth/CognitoAuth";
import context from "../../auth/context";
import Icon from "../../components/Icon";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  FormBirthdayPicker,
} from "../../components/form";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  birthday: Yup.string().required().label("Birthday"),
});

export default function ProfileDetailScreen({ navigation, route }) {
  const [popVisible, setPopVisible] = useState(false);
  const [image, setImage] = useState<any | null>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <Screen style={styles.container}>
      {/* Title */}
      <AppText style={styles.heading}>Profile details</AppText>
      {/* Profile Picture */}
      <View
        style={{
          marginTop: 50,
          width: 160,
          height: 160,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.image}
        />

        <View style={styles.iconprofile}>
          <Icon
            onPress={() => setPopVisible(true)}
            name="camera"
            size={40}
            iconColor="#fff"
            backgroundColor="#8A7DFF"
          />
          <Modal animationType="fade" transparent={true} visible={popVisible}>
            <View style={[styles.modalpop]}>
              <View style={styles.modalImage}>
                <AppButton title="Choose From Library" onPress={pickImage} />
                {image && (
                  <Image source={{ uri: image }} style={styles.image} />
                )}
              </View>
              <View style={styles.modalImage}>
                <AppCamera />
              </View>
              <View style={styles.modalImage}>
                <AppButton
                  title="Cancel"
                  onPress={() => {
                    setPopVisible(false);
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>

      <AppForm
        initialValues={{ firstName: "", lastName: "", birthday: undefined }}
        onSubmit={(values: any) => {
          Cognito.isAuthenticated()
            .then(({ attributes }) => {
              navigation.navigate("SignupGender", {
                email: attributes["email"],
                id: attributes["sub"],
                ...values,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        validationSchema={validationSchema}
      >
        {/* First Name */}
        <View style={{ marginTop: 53 }}>
          <AppFormField
            name="firstName"
            style={styles.input}
            placeholder="First name"
          />
        </View>
        {/* Last Name */}
        <AppFormField
          name="lastName"
          style={styles.input}
          placeholder="Last name"
        />
        {/* Calender Button */}
        <FormBirthdayPicker name="birthday" />
        <SubmitButton title="Continue" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  modalImage: {
    backgroundColor: "white",
    flex: 0.1,
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  container: {
    padding: 30,
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
  input: {
    marginTop: 10,
    width: "100%",
    height: 56,
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "transparent",
    borderColor: "#E5E5E5",
  },

  modalpop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
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
  iconprofile: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
});

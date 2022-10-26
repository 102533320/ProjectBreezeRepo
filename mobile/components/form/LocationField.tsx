import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ErrorMessage from "./ErrorMessage";

function LocationField({ name, key }: any) {
  const { handleChange, setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
        placeholder="Enter Suburb, City or State"
        onPress={(data, details = null) => {
          const locationObject = { ...data["terms"] };

          const location = {
            suburb: locationObject[0].value,
            city: locationObject[1].value,
            state: locationObject[2].value,
          };
          setFieldValue(name, location);
        }}
        query={{
          key: "AIzaSyBqD4a1Z-j47rCTIxrtiiQxADZ7WRR0f0E",
          language: "en",
          components: "country:au",
          types: "locality|administrative_area_level_1",
        }}
        renderLeftButton={() => {
          return (
            <View style={{ paddingHorizontal: 10 }}>
              <MaterialCommunityIcons
                name="map-marker"
                size={25}
                color="#8A7DFF"
              />
            </View>
          );
        }}
        styles={locationStyle}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const locationStyle = StyleSheet.create({
  container: {
    flex: 0,
    height: 450,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderTopEndRadius: 15,
    borderColor: "#E8E6EA",
    borderRadius: 15,
    height: 58,
  },
  textInput: {
    backgroundColor: "transparent",
    color: "black",
    borderRadius: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 14,
    flex: 1,
  },
});

export default LocationField;

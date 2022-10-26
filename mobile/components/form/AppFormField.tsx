import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, TextInput } from "react-native";
import ErrorMessage from "./ErrorMessage";
function AppFormField({ name, ...others }: any) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(name)}
        onBlur={() => {
          setFieldTouched(name);
        }}
        {...others}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#E8E6EA",
    marginTop: 30,
    width: "100%",
    height: 58,
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
});

export default AppFormField;

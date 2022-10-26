import React, { useState } from "react";
import { FlatList } from "react-native";
import InterestPickerItem from "./InterestPickerItem";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import InterestItemSetting from "./InterestItemSetting";

function InterestSetting({ name, data, ...rest }: any) {
  const { setFieldValue, errors, touched, values }: any = useFormikContext();
  const [interests, setInterests] = useState(data);
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <InterestItemSetting
            item={item}
            data={interests}
            onSelect={(items: any) => {
              setInterests(items);
              setFieldValue(
                name,
                items.filter((v) => v.active).map((v) => v["interest"])
              );
            }}
          />
        )}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default InterestSetting;

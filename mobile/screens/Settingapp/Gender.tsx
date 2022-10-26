import { StyleSheet,FlatList, Text, TouchableOpacity, View, TextInput} from "react-native";
import * as React from "react";
import * as Yup from "yup";
import Header  from "../../components/Header";
import DropDown from "../../components/DropDown";
const validationSchema = Yup.object().shape({
  selectedId: Yup.object().required().label("Gender"),
});


export default function Gender({
  navigation,
}) {
    const gender = [
    {key:"44", title: "Male"},
    {key:"55",title: "Female"},
    {key:"66",title: "Other"},];

    const [selectedItem, setSelectedItem] = React.useState({key:"44", title:"Male"});
    const onSelect=(item)=>{
      setSelectedItem(item)
    }


  return (
    <View style={styles.container}>
      <Header title="Gender Pref." navigation={navigation}/>
      <DropDown
        value={selectedItem}
        data={gender}
        onSelect={onSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
  }, 

});

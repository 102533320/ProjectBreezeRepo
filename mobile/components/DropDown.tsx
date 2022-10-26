import React from "react";
import Icon from "./Icon";
import { StyleSheet,FlatList, Text, TouchableOpacity, View, TextInput} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

function DropDown({data,value,onSelect}) {
    const [showOption, setShowOption] = React.useState(false);
 
    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }
    console.log(value)
    return (
    <View>
         <Text style={styles.text}>Gender</Text>
        <TouchableOpacity 
        style={styles.dropDownstyle}
        activeOpacity={0.8}
        onPress={()=>setShowOption(!showOption)}
        >
            <Text>{!!value? value?.title: "Male"}</Text>
            <MaterialCommunityIcons name="chevron-down" size={25} color="grey" style={{transform:[{rotate: showOption ?"180deg":"0deg"}]}}/>
        </TouchableOpacity>
        {showOption && (<View style={styles.option}>
        {data.map((val,i)=>{
            return (
                <TouchableOpacity 
                key={String(i)}
                onPress={()=>onSelectedItem(val)}
                style={{
                    backgroundColor: value.key == val.key? "#e5e2ff" : "white",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    padding: 8,
                    borderRadius:3,
                    paddingHorizontal: 6,
                }}
                >
                <Text>{val.title}</Text>
                <MaterialCommunityIcons name="check" size={24} color={ value.key == val.key? "#8A7DFF" : "white"}/>
                </TouchableOpacity>
            )
        })}
        </View>)}
      </View>
  );
}
const styles = StyleSheet.create({
    dropDownstyle:{
      backgroundColor: "white",
      padding: 8,
      width:"80%",
      left: 35,
      borderRadius:5,
      borderWidth:2,
      borderColor:"#E5E5E5",
      minHeight:42,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems: "center",
    },
    option:{
      borderWidth:2,
      borderRadius:5,
      borderColor:"#E5E5E5",
      width:"80%",
      left: 35,
      marginTop:9,
    },
    text:{
        fontSize:13,
        color:"#8A7DFF",
        width:"80%",
        left: 35,
        fontWeight:"bold",
      }
  });
  
export default DropDown;

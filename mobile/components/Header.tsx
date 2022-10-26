import React from 'react';
import { StyleSheet, Text, View,useWindowDimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BackButton from './BackButton';

export default function Header({ title, navigation }:any) {
  return (
    <View style={[styles.header, { width: useWindowDimensions().width }]}>
    <View style={[styles.titleContainer]}> 
    <BackButton navigation={navigation}/> 
      <Text style={styles.headerText}>{ title }</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
header: {
backgroundColor: 'white',
elevation: 20,
alignItems: 'flex-end',
alignSelf: 'center',
height: 55,
paddingTop: 55,
borderTopWidth: 65,
borderColor: '#fff',
flexDirection: 'row',
zIndex: 99,
marginBottom:20,
},
headerText: {
fontWeight: 'bold',
fontSize: 30 ,
color: '#000000',
paddingBottom: 24,
left: 22,
},
titleContainer: {
justifyContent: "space-between",
flexDirection: "row",
alignItems: "center",
paddingHorizontal: 25,
height: 70,
width:270,
},

});
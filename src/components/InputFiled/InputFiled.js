import React from "react";
import { TextInput, Text, StyleSheet, View, } from "react-native";

const InputFiled = ({
   Label, Placeholder, Value,secureTextEntry,rightIcon,onChangeText,onBlur
   }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{Label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={Placeholder} value={Value} secureTextEntry={secureTextEntry} onChangeText={onChangeText} onBlur={onBlur} />{rightIcon}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop:25,
    marginBottom:21,
    
  },
  label: {
    // fontSize:20,
    fontSize:20,
    // fontWeight:'bold',
    fontWeight:'500',
    // marginHorizontal:22,
    // bottom:9,
    bottom:15
  },
  inputContainer: {
    // width:'90.4%',
    alignSelf:'center',
    flexDirection:'row',
    height:50,
    // height:44,
    alignItems:'center',
    paddingHorizontal:11,
    borderWidth:1,
    borderRadius:12,
    borderColor:'#C6C6C6',
    
  },
  input: {
    // backgroundColor:'blue',
    flex:1,
    // height:'100%',
    fontSize:18,

  }
});

export default InputFiled;

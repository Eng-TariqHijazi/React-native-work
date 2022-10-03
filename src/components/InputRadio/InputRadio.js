import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RadioButton } from "react-native-paper";
const InputRadio = ({ Label }) => {
  const [checked, setChecked] = React.useState("first");
  return (

    <View style={styles.container}>
      <Text style={styles.Label}>{Label}</Text>
      <View style={styles.radioContainer}>
        <View style={styles.singleradio}>
          <RadioButton color="#7DD25A" 
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text onPress={() => setChecked("first")}>Yes</Text>
        </View>
        <View style={styles.singleradio}>
          <RadioButton  
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text onPress={() => setChecked("second")}>No</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "76%",
    marginTop: 21,
    // paddingBottom:24
  },
  radioContainer: {
    width:'75%',
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
  },
  Label: {
    fontWeight:'500',
    fontSize: 16,
  },
  singleradio: {
    flexDirection: "row",
    alignItems: "center",
    left: -7,
  },
});
export default InputRadio;

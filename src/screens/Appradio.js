import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { InputFiled } from "../components"; //Q1
import { InputRadio } from "../components"; //Q1

export default function Appradio() {
  const onProcesshand = () => {
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "web" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={onProcesshand}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.textBack}>Back</Text>
              <Text style={styles.textForm}>Form</Text>
            </View>
            <View style={styles.speratorLine} />
            <View style={styles.containerinput}>
              <Text style={styles.textForm}>
                Fill out this symptom form{"\n"}so that the doctor can help you
                faster
              </Text>
              <InputRadio Label={"Are you the patient?"} />
              <InputRadio Label={"Do you have a headache?"} />
              <InputRadio Label={"Do you have a stomachache?"} />
              <InputRadio Label={"Are you dizzy?"} />
              <InputFiled Label={"How old is the patient?"} />
              <InputFiled Label={"How old is the patient?"} />
              <InputFiled Label={"How old is the patient?"} />
              <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 18, color: "#FFFFFF" }}>Check</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    top: StatusBar.currentHeight,
  },
  header: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 44,
    alignItems: "center",
    left: 16,
  },
  textBack: {
    fontSize: 15,
    color: "#007AFF",
  },
  textForm: {
    fontSize: 17,
  },
  speratorLine: {
    height: 1,
    backgroundColor: "#70707040",
  },
  containerinput: {
    width: "75.5%",
    marginTop: 28,
    height: "100%",
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 60,
    width: 151,
    height: 44,
    backgroundColor: "#3C67AF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});

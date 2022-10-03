import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { InputFiled } from "../components/index"; //Q1
import { Entypo } from "@expo/vector-icons";

export default function Appregex() {
  const [ispasswordShown, setIsPasswordShown] = useState(true);
  const showPasswordHandler = () => {
    setIsPasswordShown((currentState) => !currentState);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(email)
  const isValidEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    if (email.match(regex)) return true;
    else console.log(email);
  };
  const isValidPassword = (Password) => {
    let regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/;
    if (Password.match(regex)) return true;
    else console.log("not valid password");
  };
  const handelSupmit = () => {
    if (isValidEmail(email) && isValidPassword(password)) console.log("valid");
    else console.log(" Not valid ");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.login}>login</Text>
        <InputFiled
          Label="Email"
          Placeholder={"user@gmail.com"}
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <InputFiled
          Label="Password"
          Placeholder={"***********************"}
          secureTextEntry={ispasswordShown}
          value={password}
          onChangeText={setPassword}
          rightIcon={
            ispasswordShown ? (
              <Entypo
                name="eye-with-line"
                size={24}
                color="#999999"
                onPress={showPasswordHandler}
              />
            ) : (
              <Entypo
                name="eye"
                size={24}
                color="#999999"
                onPress={showPasswordHandler}
              />
            )
          }
        />
        <TouchableOpacity style={styles.button} onPress={handelSupmit}>
          <Text style={{ fontSize: 18, color: "#FFFFFF" }}>Supmit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: "center",
    width:'80.4%',
    alignSelf:'center'
  },
  login: {
    fontSize: 22,
    fontWeight: "bold",
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

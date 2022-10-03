import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as yup from 'yup';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { InputFiled } from "../components"; //Q1
import { Entypo } from "@expo/vector-icons";
import { Formik } from 'formik';
import { ActivityIndicator } from "react-native-paper";

const loginSchema = yup.object().shape({
    email:yup.string().required('email is required').email('invalid Email'),
    password:yup.string().required().matches( /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/ ,"password must 8 char")
})
export default function LogInFormikyup() {
  const [ispasswordShown, setIsPasswordShown] = useState(true);
  const showPasswordHandler = () => {
    setIsPasswordShown((currentState) => !currentState);
  };
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  // console.log(email)

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>

    <Formik initialValues={{email:'',password:''}} onSubmit={(values ,{...rest})=>{
        setTimeout(()=>{
          rest.setSubmitting(false)
        },2000);
    } } validationSchema={loginSchema}>
    {({handleChange,handleBlur,handleSubmit,values,errors,touched,isSubmitting})=>(
    <>
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.login}>login</Text>
      <InputFiled
        Label="Email"
        Placeholder={"user@gmail.com"}
        onChangeText={handleChange('email')}
        value={values.email}
        onBlur={handleBlur('email')}
      />
      {errors.email&& touched.email && <Text style={{ fontSize: 18, color: "red" }}>{errors.email}</Text>}
      <InputFiled
        Label="Password"
        Placeholder={"***********************"}
        secureTextEntry={ispasswordShown}
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
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
      {errors.password&& touched.password && <Text style={{ fontSize: 18, color: "red" }}>{errors.password}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
        <Text style={{ fontSize: 18, color: "#FFFFFF" }}>Submit</Text>
      </TouchableOpacity>
        {isSubmitting&&<ActivityIndicator size={"large"}/>}
    </>
    )}
</Formik>
</View>
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",width:'85%',alignSelf:'center'
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

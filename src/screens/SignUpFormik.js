import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { InputFiled } from "../components";
import { ActivityIndicator } from "react-native-paper";
export default function SignUpFormik() {
  const [ispasswordShown, setIsPasswordShown] = useState(true);
  const showPasswordHandler = () => {
    setIsPasswordShown((currentState) => !currentState);
  };
  const signUpSchema = yup.object().shape({
    name: yup.string().required("Set Name"),
    email: yup.string().required("email is required").email("invalid Email"),
    Password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
        "password must 8 char"
      ),
    confirm: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords must match"),
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "web" ? "padding" : "height"}
      style={{ flex: 1, height: "100%" }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <View style={styles.container}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                Password: "",
                confirm: "",
                pnumber: "",
              }}
              onSubmit={(values, { ...rest }) => {
                setTimeout(() => {
                  rest.setSubmitting(false);
                }, 2000);
              }}
              validationSchema={signUpSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <>
                  <View style={styles.iconContainer}>
                    <Image
                      style={{ width: "50%", height: 66 }}
                      resizeMode="contain"
                      source={require("../../assets/12.png")}
                    />
                    <View>
                      <Text style={styles.texticon}>Chat</Text>
                      <Text style={styles.texticon}>Docs</Text>
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={[
                        styles.button,
                        {
                          backgroundColor: "#3C67AF",
                          zIndex: 1,
                          marginHorizontal: -12,
                        },
                      ]}
                    >
                      <Text style={[styles.textButton, { color: "#FFFFFF" }]}>
                        Patient
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, { backgroundColor: "#F0F0F0" }]}
                    >
                      <Text style={[styles.textButton, { color: "#3C67AF" }]}>
                        Doctor
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.containerInput}>
                    <InputFiled
                      Label={"Name"}
                      Placeholder={"mail@gmail.com"}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      Value={values.name}
                    />
                    {errors.name && touched.name && (
                      <Text style={{ color: "red" }}>{errors.name}</Text>
                    )}
                    <InputFiled
                      Label={"Email"}
                      Placeholder={"mail@gmail.com"}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      Value={values.email}
                    />
                    {errors.email && touched.email && (
                      <Text style={{ color: "red" }}>{errors.email}</Text>
                    )}
                    <InputFiled
                      Label={"Password"}
                      Placeholder={"*****************"}
                      onChangeText={handleChange("Password")}
                      onBlur={handleBlur("Password")}
                      Value={values.Password}
                      secureTextEntry={ispasswordShown}
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
                    {errors.Password && touched.Password && (
                      <Text style={{ color: "red" }}>{errors.Password}</Text>
                    )}
                    <InputFiled
                      Label={"Confirm"}
                      Placeholder={"*****************"}
                      onChangeText={handleChange("confirm")}
                      onBlur={handleBlur("confirm")}
                      Value={values.confirm}
                      secureTextEntry={ispasswordShown}
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
                    {errors.confirm && touched.confirm && (
                      <Text style={{ color: "red" }}>
                        Confirm Password is not Equal the Password
                      </Text>
                    )}
                    <InputFiled
                      Label={"Phone number"}
                      Placeholder={"0123456789"}
                      onChangeText={handleChange("pnumber")}
                      onBlur={handleBlur("pnumber")}
                      Value={values.pnumber}
                    />
                    {errors.pnumber && touched.pnumber && (
                      <Text>{errors.pnumber}</Text>
                    )}
                    <TouchableOpacity
                      style={[
                        styles.button,
                        {
                          backgroundColor: "#3C67AF",
                          zIndex: 1,
                          alignSelf: "center",
                          marginVertical: 53,
                        },
                      ]}
                      onPress={handleSubmit}
                      disabled={isSubmitting}
                    >
                      <Text style={{ fontSize: 18, color: "#FFFFFF" }}>
                        Sign up
                      </Text>
                    </TouchableOpacity>
                    {isSubmitting && <ActivityIndicator size={"large"} />}
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 0.9,
    // alignItems: "center",
    marginHorizontal: 18,
  },
  iconContainer: {
    width: 100,
    height: 66,
    flexDirection: "row",
    marginVertical: 80,
    alignSelf: "center",
  },
  texticon: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1B55A0",
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 0.9,
    alignSelf: "center",
  },
  button: {
    width: 151,
    height: 44,

    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "500",
  },
  containerInput: {
    marginVertical: 50,
  },
});

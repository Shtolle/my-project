import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import authApi from "../api/auth";

import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivitiIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();
  const [registerFailed, setRegisterFailed] = useState(false);
  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    console.log(result);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An Unexpected error occured");
        console.log(result);
      }
      return setRegisterFailed(true);
    }
    const response = await loginApi.request(userInfo);
    auth.logIn(response.data);
  };
  return (
    <>
      <ActivitiIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error="Already exists" visible={registerFailed} />
          <AppFormField
            autocorrect={false}
            icon="human"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autocorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autocorrect={false}
            icon="lock"
            keyboardType="email-address"
            name="password"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default RegisterScreen;

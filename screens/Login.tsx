import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Image,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoImage from "../assets/LOGO.png";
import { scale } from "react-native-size-matters";
import BottomImage from "../assets/loginBottomImage.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    const isUserNameEmpty = userName.trim() === "";
    const isPasswordEmpty = password.trim() === "";

    setUserNameError(isUserNameEmpty);
    setPasswordError(isPasswordEmpty);

    if (!isUserNameEmpty && !isPasswordEmpty) {
      console.log(userName, password);
    }
  };

  const handleUserNameChange = (text: string) => {
    setUserName(text);
    if (text.trim() !== "") setUserNameError(false);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (text.trim() !== "") setPasswordError(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.innerContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Image source={LogoImage} style={styles.logo} />
            <Text style={styles.title}>Sign In</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>User Name</Text>
              <TextInput
                style={[styles.input, userNameError && styles.inputError]}
                value={userName}
                onChangeText={handleUserNameChange}
                placeholder="Enter your username"
              />
              {userNameError && <Text style={styles.errorText}>Enter the username</Text>}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={[styles.input, passwordError && styles.inputError]}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
                placeholder="Enter your password"
              />
              {passwordError && <Text style={styles.errorText}>Enter the password</Text>}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <Image source={BottomImage} style={styles.bottomImage} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(16)
  },
  innerContainer: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    width: scale(100),
    height: scale(100),
    marginBottom: scale(16),
    resizeMode: "contain"
  },
  title: {
    fontSize: scale(24),
    fontFamily: "Manrope-ExtraBold",
    fontWeight: "bold",
    marginBottom: scale(32)
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16
  },
  label: {
    marginBottom: scale(4),
    fontSize: scale(16),
    fontFamily: "Manrope-Bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#E4E7EC",
    borderRadius: scale(10),
    padding: scale(12),
    width: "100%"
  },
  inputError: {
    borderColor: "red"
  },
  errorText: {
    color: "red",
    marginTop: scale(4),
    fontSize: scale(12),
    fontFamily: "Manrope-Regular"
  },
  button: {
    backgroundColor: "#2986FF",
    width: "100%",
    borderRadius: scale(10),
    paddingVertical: scale(14),
    paddingHorizontal: scale(32),
    marginTop: scale(24),
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontFamily: "Manrope-ExtraBold",
    fontSize: scale(16)
  },
  bottomImage: {
    marginTop: scale(4),
    resizeMode: "cover",
    alignSelf: "center"
  }
});

export default Login;

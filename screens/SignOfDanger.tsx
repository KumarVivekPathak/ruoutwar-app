import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


const SignOfDanger = () => {

  const [signOfDanger, setSignOfDanger] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSignOfDanger = (text: string) => {
    setSignOfDanger(text);
    setErrorMessage('');
  }

  const handleSave = () => {
    if (signOfDanger.trim() === '') {
      setErrorMessage('Please enter danger description');
      return;
    }
    console.log("handle save: ", signOfDanger);
  }


    return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <CustomHeader title="Sign of Danger" />

          <View style={styles.contentContainer}>
            <CustomInput
              label="Sign of Danger Description"
              placeholder="Fire in kitchen"
              numberOfLines={4}
              value={signOfDanger}
              onChangeText={handleSignOfDanger}
              errorMessage={errorMessage}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton title="SAVE" onPress={handleSave} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

export default SignOfDanger;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: scale(16),
        paddingTop: verticalScale(16),
    },
    contentContainer: {
        flex: 1,
        padding: scale(16)
    },
    buttonContainer: {
        padding: scale(16),
        marginBottom: scale(16)
    },
})

import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const AdditionalDetails = () => {

  const [notes, setNotes] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleNotes = (text: string) => {
    setNotes(text);
    setErrorMessage('');
  }

  const handleSave = () => {
    if (notes.trim() === '') {
      setErrorMessage('Please enter notes');
      return;
    }
    console.log("handle save: ", notes);
  }

    return (
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // adjust based on header height
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            <CustomHeader title="Additional Details and Requests" />
  
            <View style={styles.contentContainer}>
              <CustomInput
                label="Notes"
                placeholder="Need Ambulance"
                numberOfLines={4}
                value={notes}
                onChangeText={handleNotes}
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

export default AdditionalDetails;

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

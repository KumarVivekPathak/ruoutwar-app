import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { BASE_URL } from "../config";
import { useAuth } from "../context/AuthContext";


const SignOfDanger = ({ route }: { route: any }) => {

  const {authToken} = useAuth();
  const incidentId = route.params?.incidentId;
  const [signOfDanger, setSignOfDanger] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSignOfDanger = (text: string) => {
    setSignOfDanger(text);
    setErrorMessage('');
  }

  const handleAPICall =async () => {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzI1NTk3MjAzYTBmYjIyNzc4ZmFmMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0ODEzMjU2M30.JhQaUrq8woPnyRXwrw2gV70HtwhP3XcIhsAlzj1i10w"
    const token = authToken;
    try{

    const formData = new FormData();
    formData.append("sign_of_danger[status]", "true");
    formData.append("sign_of_danger[sign_of_danger]", signOfDanger);     


    const response = await axios.put(`${BASE_URL}/user/incident-type/683650cccdfa52a1340ff3de`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }

    });
    console.log("response is here for danger:: ", response.data)

    }catch(error){
      console.log("Error in refusal is  :: ", error)
    }
  }

  const handleSave = () => {
    if (signOfDanger.trim() === '') {
      setErrorMessage('Please enter danger description');
      return;
    }
    // Keyboard.dismiss();
    handleAPICall();
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

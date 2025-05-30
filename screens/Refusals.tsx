import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Refusals = () => {
  const [noOfRefusals, setNoOfRefusals] = useState('');
  const [location, setLocation] = useState('');
  const [noOfRefusalsError, setNoOfRefusalsError] = useState('');
  const [locationError, setLocationError] = useState('');

  const handleNoOfRefusals = (text) => {
    setNoOfRefusals(text);
    setNoOfRefusalsError('');
  };

  const handleLocation = (text) => {
    setLocation(text);
    setLocationError('');
  };

  const handleSave = () => {
    let isValid = true;

    if (noOfRefusals.trim() === '') {
      setNoOfRefusalsError('Please enter the number of refusals');
      isValid = false;
    } else {
      const num = parseInt(noOfRefusals, 10);
      if (isNaN(num) || num < 0) {
        setNoOfRefusalsError('Please enter a valid non-negative number');
        isValid = false;
      }
    }

    if (location.trim() === '') {
      setLocationError('Please enter the location');
      isValid = false;
    }

    if (isValid) {
      console.log("No. of Refusals:", parseInt(noOfRefusals, 10));
      console.log("Location:", location);
      Keyboard.dismiss();
    }
  };

  const headerHeight = verticalScale(60);

  return (
    <View style={styles.outerContainer}>
      <CustomHeader title="Refusals" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerTouchableContainer}>
              <View style={styles.contentContainer}>
                <CustomInput
                  label="No. of Refusals"
                  placeholder="2"
                  value={noOfRefusals}
                  onChangeText={handleNoOfRefusals}
                  keyboardType="numeric"
                  errorMessage={noOfRefusalsError}
                />
                <CustomInput
                  label="Location"
                  placeholder="Toilet"
                  numberOfLines={4}
                  value={location}
                  onChangeText={handleLocation}
                  multiline={true}
                  errorMessage={locationError}
                />
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton title="SAVE" onPress={handleSave} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Refusals;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(16),
  },
  innerTouchableContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    marginTop: verticalScale(20),
  },
});
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView, // Import ScrollView
  StatusBar, // For potential StatusBar height if needed for offset
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const PersonWithDisability = () => {
  const [noOfPersonWithDisability, setNoOfPersonWithDisability] = useState('');
  const [descriptionAndLocation, setDescriptionAndLocation] = useState('');
  const [noOfPersonError, setNoOfPersonError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleNoOfPersonWithDisability = (text) => {
    setNoOfPersonWithDisability(text);
    setNoOfPersonError(''); // Clear error on change
  }

  const handleDescriptionAndLocation = (text) => {
    setDescriptionAndLocation(text);
    setDescriptionError(''); // Clear error on change
  }

  const handleSave = () => {
    let isValid = true;

    // Validate No. of Person With Disability
    if (noOfPersonWithDisability.trim() === '') {
      setNoOfPersonError('Please enter the number of persons');
      isValid = false;
    } else {
      const num = parseInt(noOfPersonWithDisability, 10);
      if (isNaN(num) || num < 0) {
        setNoOfPersonError('Please enter a valid non-negative number');
        isValid = false;
      }
    }

    // Validate Description and Location
    if (descriptionAndLocation.trim() === '') {
      setDescriptionError('Please enter description and location');
      isValid = false;
    }

    if (isValid) {
      console.log("No. of Person with Disability:", parseInt(noOfPersonWithDisability, 10));
      console.log("Description and Location:", descriptionAndLocation);
      Keyboard.dismiss(); // Dismiss keyboard on successful save
      // Proceed with saving data, e.g., API call
    }
  }

  // Estimate CustomHeader height for keyboardVerticalOffset on iOS
  // Adjust this value if your CustomHeader has a different fixed height.
  const headerHeight = verticalScale(60); // A common estimate for a header height

  return (
    <View style={styles.outerContainer}>
      <CustomHeader title="Person With Disability" />
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
                  label="No. of Person With Disability"
                  placeholder="2"
                  value={noOfPersonWithDisability}
                  onChangeText={handleNoOfPersonWithDisability}
                  keyboardType="numeric" // Set keyboard type to numeric
                  errorMessage={noOfPersonError}
                />

                <CustomInput
                  label="Description and Location"
                  placeholder="fire stairs"
                  numberOfLines={6}
                  value={descriptionAndLocation}
                  onChangeText={handleDescriptionAndLocation}
                  multiline={true} // Explicitly set multiline to true
                  errorMessage={descriptionError}
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
  )
}

export default PersonWithDisability;

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
    paddingBottom: verticalScale(16), // Ensure content has bottom padding
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
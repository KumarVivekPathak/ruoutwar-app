import React from "react";
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
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.screen}>
            <CustomHeader title="Refusals" />

            <View style={styles.contentContainer}>
              <CustomInput label="No. of Refusals" placeholder="2" />
              <CustomInput label="Location" placeholder="Toilet" numberOfLines={4} />
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton title="SAVE" onPress={() => {}} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Refusals;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(16),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    padding: scale(16),
  },
  buttonContainer: {
    padding: scale(16),
    marginBottom: scale(16),
  },
});

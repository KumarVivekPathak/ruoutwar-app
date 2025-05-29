import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';    

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: any;
}
    
const CustomButton = ({ title, onPress, style }: CustomButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: verticalScale(14),
        paddingHorizontal: scale(24),
        borderRadius: 999,
        gap: scale(10),
      },
      buttonText: {
        color: 'white',
        fontSize: moderateScale(16),
        fontWeight: '600',
      },
})

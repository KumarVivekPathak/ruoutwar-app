import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomHeader from '../components/CustomHeader';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CustomInput from '../components/CustomInput';
import TickImage from '../assets/images/tick.png';
import CrossImage from '../assets/images/cross.png';
import WheelChairImage from '../assets/images/wheelchair.png';
import FireImage from '../assets/images/fire.png';
import MediaImage from '../assets/images/media.png';
import CustomButton from '../components/CustomButton';

const Instructions = () => {
    
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.screen}>
            <CustomHeader title="Level 1 South 1" />

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={TickImage} style={styles.image} />
                    <Text style={styles.title}>All Clear</Text>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.yesButton}>
                        <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.noButton}>
                        <Text style={styles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={CrossImage} style={styles.image} />
                    <Text style={styles.title}>Refusals</Text>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.yesButton, {backgroundColor: '#FE8D8D'}]}>
                        <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.noButton}>
                        <Text style={styles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={WheelChairImage} style={styles.image} />
                    <Text style={styles.title}>Persion with a Disability</Text>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.yesButton, {backgroundColor: '#FE8D8D'}]}>
                        <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.noButton}>
                        <Text style={styles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={FireImage} style={styles.image} />
                    <Text style={styles.title}>Is there any Sign of Danger?</Text>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.yesButton, {backgroundColor: '#FE8D8D'}]}>
                        <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.noButton}>
                        <Text style={styles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.belowContainer}>
                <View style={styles.imageContainer}>
                    <Image source={WheelChairImage} style={styles.image} />
                    <Text style={styles.title}>Persion with a Disability</Text>
                </View>
                <View style={styles.iconContainer}>
                        <FontAwesome5 name="caret-right" size={20} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.belowContainer}>
                <View style={styles.imageContainer}>
                    <Image source={MediaImage} style={styles.image} />
                    <Text style={styles.title}>Media Files</Text>
                </View>
                <View style={styles.iconContainer}>
                        <FontAwesome5 name="caret-right" size={20} color="black" />
                </View>
            </TouchableOpacity>

            <CustomButton title="SUBMIT" onPress={() => {}} style={styles.submitButton} />

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: scale(16),
        paddingTop: verticalScale(16),
        backgroundColor: '#fff',
    },
    container: {
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#E4E7EC',
        padding: moderateScale(16),
        backgroundColor: '#f9f9f9',
        marginTop: verticalScale(1),
        justifyContent:'flex-start',
        marginBottom: verticalScale(13),
      
    },
    belowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: scale(15),
        borderWidth: 1,
        borderColor: '#E4E7EC',
        paddingHorizontal: moderateScale(12),
        paddingVertical: verticalScale(12),
        backgroundColor: '#f9f9f9',
        marginTop: verticalScale(1),
        marginBottom: verticalScale(8),
        
    },
    image: {
        backgroundColor:'green',
        width: scale(18),
        height: scale(18),
        resizeMode: 'contain',
        borderRadius: scale(3),
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        flex: 1,
        marginRight: scale(16),
    },
    title: {
        marginLeft: scale(5),
        fontSize: moderateScale(14),
        fontFamily: 'Manrope-Bold',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: verticalScale(10),
    },
    yesButton: {
        flex: 1,
        backgroundColor: '#FF1C1C',
        paddingVertical: verticalScale(8),
        borderRadius: scale(12),
        marginRight: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    noButton: {
        flex: 1,
        backgroundColor: '#34C75980',
        paddingVertical: verticalScale(8),
        borderRadius: scale(12),
        marginLeft: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: moderateScale(13),
        fontFamily: 'Manrope-Bold',
    },
    submitButton: {
        marginTop: verticalScale(10),
    },
});

export default Instructions;

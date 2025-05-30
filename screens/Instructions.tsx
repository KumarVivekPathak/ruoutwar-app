import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import { RootStackNavigation } from '../navigation/types';

import TickImage from '../assets/images/tick.png';
import CrossImage from '../assets/images/cross.png';
import WheelChairImage from '../assets/images/wheelchair.png';
import FireImage from '../assets/images/fire.png';
import EditImage from '../assets/images/edit.png';
import MediaImage from '../assets/images/media.png';

const Instructions = () => {
    const navigation = useNavigation<RootStackNavigation>();

    const listItem = [
        {
            title: 'Additional Details and Requests',
            image: EditImage,
            route: 'AdditionalDetails',
        },
        {
            title: 'Media Files',
            image: MediaImage,
            route: 'MediaFiles',
        },
    ];

    const buttonItems = [
        {
            title: 'All Clear',
            image: TickImage,
            onPress: () => navigation.navigate('Refusals'),
            colour: '#FF1C1C',
        },
        {
            title: 'Refusals',
            image: CrossImage,
            onPress: () => navigation.navigate('Refusals'),
            colour: '#fe8d8d',
        },
        {
            title: 'Person with a Disability',
            image: WheelChairImage,
            onPress: () => navigation.navigate('PersonWithDisability'),
            colour: '#fe8d8d',
        },
        {
            title: 'Is there any Sign of Danger?',
            image: FireImage,
            onPress: () => navigation.navigate('SignOfDanger'),
            colour: '#fe8d8d',
        },
    ]

    return (
        <View style={styles.screen}>
            <CustomHeader title="Level 1 South 1" />
            <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 100 }}>
                {buttonItems.map((item, index) => (
                    <View style={styles.container} key={index}>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity onPress={item.onPress} style={[styles.yesButton, { backgroundColor: item.colour }]}>
                                <Text style={styles.buttonText}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.noButton}>
                                <Text style={styles.buttonText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {listItem.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate(item.route)}
                        style={styles.belowContainer}
                    >
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="caret-right" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                ))}

            <View style={styles.submitButton}>
                <CustomButton title="SUBMIT" onPress={() => {}} />
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
        marginBottom: 10,
    },
    container: {
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: '#E4E7EC',
        padding: moderateScale(16),
        backgroundColor: '#f9f9f9',
        marginTop: verticalScale(1),
        justifyContent: 'flex-start',
        marginBottom: verticalScale(13),
    },
    belowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        width: scale(18),
        height: scale(18),
        resizeMode: 'contain',
        borderRadius: scale(3),
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: scale(16),
    },
    title: {
        marginLeft: scale(5),
        fontSize: moderateScale(14),
        fontFamily: 'Manrope-Bold',
        color: '#363636',
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
        position: 'absolute',
        bottom: verticalScale(20),
        left: moderateScale(16),
        right: moderateScale(16),
    },
});

export default Instructions;

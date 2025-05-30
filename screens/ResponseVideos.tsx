import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomHeader from '../components/CustomHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Video, AVPlaybackStatus } from 'expo-av';

const ResponseVideos = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

  const videoUri = require('../assets/sampleVideo.mp4'); // Add your video file here

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (

    <View style={styles.screen}>
    <CustomHeader title="Response Videos" />

    <View style={styles.card}>
        <Text style={styles.title}>EVALUATION INSTRUCTIONS</Text>

        <View style={styles.rowIcon}>
        <TouchableOpacity style={styles.icon}>
            <Ionicons name="play-circle" size={30} color="#3392CC" />
        </TouchableOpacity>
        </View>
    </View>



    <View style={styles.videoContainer}>
        <Video
          ref={(ref) => {
            if (ref) {
              ref.playAsync();
            }
          }}
          style={styles.video}
          source={videoUri}
          useNativeControls
          resizeMode="contain"
          // isLooping
          onPlaybackStatusUpdate={status => setStatus(status)}
        />
      </View>

</View>
  );
};

export default ResponseVideos;

const styles = StyleSheet.create({
screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(16),
},
card: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: scale(12),
    padding: moderateScale(12),
    marginTop: verticalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2
},
title: {
    color: '#2D2D2D',
    flex: 1,
    fontSize: moderateScale(16),
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
},
blackText: {
    fontSize: moderateScale(14),
    color: '#000',
    fontFamily: 'Manrope-Regular',
},
blueText: {
    fontSize: moderateScale(14),
    color: '#3392CC',
    fontFamily: 'Manrope-Regular',
},
rowIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
},
icon: {
    marginRight: scale(6),
},
  videoContainer: {
    width: '100%',
    aspectRatio: 16/9,
    marginTop: verticalScale(16),
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(16),
  },
  playButton: {
    backgroundColor: '#3392CC',
    padding: scale(12),
    borderRadius: scale(30),
  },
  pauseButton: {
    backgroundColor: '#3392CC',
    padding: scale(12),
    borderRadius: scale(30),
  },
});

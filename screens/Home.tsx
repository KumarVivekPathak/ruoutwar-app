import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigation } from '../navigation/types';
import { TabParamList } from '../navigation/types';
import { loadFonts } from '../assets/fonts/Fonts';

const Home = () => {
  const navigation = useNavigation<RootStackNavigation>();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResources() {
      await loadFonts();
      setFontsLoaded(true);
    }
    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Instructions')}
      >
        <Text style={styles.buttonText}>Go to Instructions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    
    marginBottom: 20,
    fontFamily: "Roboto-Bold"
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;

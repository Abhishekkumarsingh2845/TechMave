import React, { useEffect } from 'react';
import { View, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight,scaleWidth } from '../utlis/responsive';
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate to Login screen
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigation]);

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('./../assets/images/splash.png')}
        style={styles.container}
        resizeMode="cover"
      >
        {/* Optional splash content */}
      </ImageBackground>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scaleHeight(40), // scaled vertical padding
    paddingHorizontal: scaleWidth(20), // example horizontal padding
  },
});

import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const Scan = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('PunchIn');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{marginVertical:20}}/>
      <Header title="Scan QR" />
      <View style={styles.qrContainer}>
        <Image
          source={require('../assets/images/qq.jpg')}
          style={styles.qrImage}
        />
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

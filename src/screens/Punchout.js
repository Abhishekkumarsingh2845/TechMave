import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';


export default function Punchout() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.qrContainer}>
        <Image
          source={require('../assets/images/qr.png')}
          style={styles.qrImage}
        />
      </View>

      <View style={styles.successContainer}>
        <Text style={styles.successText}>QR successfully scanned!</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ClientsScreen')}
      >
        <Text style={styles.buttonText}>Punch out to end task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scaleWidth(20),
  },
  header: {
    marginBottom: scaleHeight(20),
    alignItems: 'center',
  },
  headerText: {
    fontSize: scaleWidth(22),
    fontWeight: 'bold',
    color: '#241c63',
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(20),
  },
  qrImage: {
    width: scaleWidth(150),
    height: scaleWidth(150),
    resizeMode: 'contain',
  },
  successContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scaleHeight(20),
  },
  successText: {
    fontSize: scaleWidth(16),
    fontWeight: '600',
    marginLeft: scaleWidth(10),
    color: '#241c63',
  },
  button: {
    backgroundColor: '#241c63',
    paddingVertical: scaleHeight(15),
    paddingHorizontal: scaleWidth(30),
    borderRadius: scaleWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: scaleHeight(40),
    left: scaleWidth(20),
    right: scaleWidth(20),
  },
  buttonText: {
    color: '#fff',
    fontSize: scaleWidth(16),
    fontWeight: '600',
  },
});

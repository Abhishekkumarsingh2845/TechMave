import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Header = ({ onBackPress, title = 'My Orders' }) => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => nav.goBack()}>
        <Image
          source={require('../assets/images/Back.png')}
          style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {/* Invisible view for balancing center alignment */}
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 40, // same width as back button to keep title centered
  },
});

export default Header;

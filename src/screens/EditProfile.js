import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Craig John');
  const [email, setEmail] = useState('hello@example.com');
  const [phone, setPhone] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/Back.png')} // <-- change path
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Update Details</Text>
        <View style={{ width: scaleWidth(24) }} /> {/* placeholder for spacing */}
      </View>

      {/* Description */}
      <View style={styles.descContainer}>
        <Text style={styles.title}>Edit Your Profile Details</Text>
        <Text style={styles.subtitle}>
          Update your name, email, and phone number to keep your profile information accurate and
          up-to-date.
        </Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          <Image
             source={require('../assets/images/Back.png')}// placeholder avatar
            style={styles.profileIcon}
          />
        </View>
        <Text style={styles.profileName}>Hi, I’m Craig</Text>
        <Text style={styles.profileEmail}>craigR54@gmail.com</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneRow}>
          <TouchableOpacity style={styles.countryCode}>
            <Text style={{ fontSize: 16 }}>🇺🇸 +1</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.phoneInput}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scaleWidth(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: scaleHeight(60),
  },
  backIcon: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: scaleWidth(18),
    fontWeight: '600',
    color: '#000',
  },
  descContainer: {
    marginTop: scaleHeight(10),
  },
  title: {
    fontSize: scaleWidth(16),
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: scaleWidth(14),
    color: '#666',
    marginTop: scaleHeight(5),
    lineHeight: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: scaleHeight(20),
  },
  profileCircle: {
    width: scaleWidth(80),
    height: scaleWidth(80),
    borderRadius: scaleWidth(40),
    backgroundColor: '#e6e4f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    tintColor: '#6b65b2',
    resizeMode: 'contain',
  },
  profileName: {
    fontSize: scaleWidth(16),
    fontWeight: '700',
    marginTop: scaleHeight(10),
    color: '#000',
  },
  profileEmail: {
    fontSize: scaleWidth(14),
    color: '#666',
    marginTop: scaleHeight(2),
  },
  formGroup: {
    marginTop: scaleHeight(20),
  },
  label: {
    fontSize: scaleWidth(14),
    fontWeight: '500',
    marginBottom: scaleHeight(8),
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: scaleWidth(12),
    height: scaleHeight(45),
    fontSize: scaleWidth(14),
    color: '#000',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  countryCode: {
    paddingHorizontal: scaleWidth(10),
    height: scaleHeight(45),
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  phoneInput: {
    flex: 1,
    height: scaleHeight(45),
    paddingHorizontal: scaleWidth(10),
    fontSize: scaleWidth(14),
    color: '#000',
  },
  button: {
    backgroundColor: '#241c63',
    paddingVertical: scaleHeight(14),
    borderRadius: 8,
    marginTop: scaleHeight(30),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: scaleWidth(16),
    fontWeight: '600',
  },
});

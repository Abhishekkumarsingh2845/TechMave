import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        {/* Title */}
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Please enter your mobile number{'\n'}and password below
        </Text>

        <Text style={styles.label}>Mobile</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/msg.png")}
            style={{ width: scaleWidth(30), height: scaleHeight(30) }}
          />
          <TextInput
            placeholder="andrews@gm"
            value={mobile}
            onChangeText={setMobile}
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/Phone.png")}
            style={{
              width: scaleWidth(30),
              height: scaleHeight(30),
              resizeMode: "contain"
            }}
          />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate('Main')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4f9',
  },
  inner: {
    flex: 1,
    padding: scaleWidth(20),
    marginTop: scaleHeight(50),
  },
  title: {
    fontSize: scaleWidth(28),
    fontWeight: 'bold',
    marginBottom: scaleHeight(5),
    color: '#000',
  },
  subtitle: {
    fontSize: scaleWidth(14),
    color: '#999',
    marginBottom: scaleHeight(30),
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
    marginBottom: scaleHeight(5),
    fontSize: scaleWidth(14),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scaleWidth(8),
    paddingHorizontal: scaleWidth(10),
    marginBottom: scaleHeight(20),
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: scaleHeight(45),
    fontSize: scaleWidth(14),
  },
  button: {
    backgroundColor: '#2d1b69',
    paddingVertical: scaleHeight(15),
    borderRadius: scaleWidth(8),
    alignItems: 'center',
    marginTop: scaleHeight(10),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: scaleWidth(16),
  },
});

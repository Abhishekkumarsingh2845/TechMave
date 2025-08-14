import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView contentContainerStyle={{ paddingBottom: scaleHeight(30) }}>
        {/* Header */}
        <View style={styles.header}>
          <Header title="Profie" />
          <View style={{ width: scaleWidth(24) }} />
        </View>

        {/* Profile Section */}
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Image
            source={require('../assets/images/profilepic.png')}
            style={{ width: scaleWidth(60), height: scaleHeight(60) }}
          />
          <View style={{ flex: 1, marginLeft: scaleWidth(36) }}>
            <Text style={styles.profileName}>Enxh Shehi</Text>
          </View>
        </TouchableOpacity>

        {/* Account Settings */}
        <Text style={styles.sectionTitle}>Account settings</Text>

        {/* Personal Info */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/images/Group.png')}
            style={styles.backIcon}
          />
          <Text style={styles.cardText}>Personal information</Text>
          <Image
            source={require('../assets/images/rr.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        {/* My Orders */}
        <TouchableOpacity style={styles.simpleCard}>
          <Image
            source={require('../assets/images/Group.png')}
            style={styles.backIcon}
          />
          <Text style={styles.cardText}>My Orders</Text>
          <Image
            source={require('../assets/images/rr.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        {/* Products */}
        <TouchableOpacity
          style={styles.simpleCard}
          onPress={() => navigation.navigate('Products')}
        >
          <Image
            source={require('../assets/images/Group.png')}
            style={styles.backIcon}
          />
          <Text style={styles.cardText}>My Orders</Text>
          <Image
            source={require('../assets/images/rr.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.logoutText}>Log Out</Text>
        <Text style={styles.appVersion}>App Version 25.9.2</Text>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('ClientsScreen')}
        >
          <Text style={styles.applyButtonText}>Apply Leave</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(12),
    backgroundColor: '#fff',
  },
  backIcon: {
    width: scaleWidth(15),
    height: scaleHeight(15),
    resizeMode: 'contain',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleHeight(16),
  },
  profileName: {
    fontSize: scaleWidth(24),
    fontWeight: '600',
  },
  sectionTitle: {
    paddingHorizontal: scaleWidth(16),
    paddingTop: scaleHeight(10),
    paddingBottom: scaleHeight(4),
    fontSize: scaleWidth(14),
    fontWeight: '600',
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: scaleWidth(8),
    padding: scaleWidth(12),
    marginHorizontal: scaleWidth(16),
    marginVertical: scaleHeight(6),
  },
  simpleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: scaleWidth(8),
    padding: scaleWidth(12),
    marginHorizontal: scaleWidth(16),
    marginVertical: scaleHeight(6),
  },
  cardText: {
    flex: 1,
    fontSize: scaleWidth(14),
    marginLeft: scaleWidth(20),
  },
  logoutText: {
    marginHorizontal: scaleWidth(16),
    marginTop: scaleHeight(16),
    fontSize: scaleWidth(14),
    fontWeight: '600',
  },
  appVersion: {
    marginHorizontal: scaleWidth(16),
    color: '#888',
    fontSize: scaleWidth(12),
    marginBottom: scaleHeight(16),
  },
  applyButton: {
    backgroundColor: '#241E63',
    paddingVertical: scaleHeight(14),
    borderRadius: scaleWidth(10),
    marginHorizontal: scaleWidth(16),
    alignItems: 'center',
    marginBottom: scaleHeight(30),
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: scaleWidth(14),
  },
});

export default Profile;

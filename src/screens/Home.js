import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import PunchInCard from '../components/PunchInCard';
import PunchOutCard from '../components/PunchOut';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';


export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Alex</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <Image
        source={require('../assets/images/oo.png')}
        style={styles.banner}
      />

      {/* Cards */}
      <PunchInCard />
      <PunchOutCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: scaleHeight(40),
    paddingHorizontal: scaleWidth(16),
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(20),
  },
  welcomeText: {
    fontSize: scaleWidth(18),
    color: '#333',
  },
  nameText: {
    fontSize: scaleWidth(22),
    fontWeight: 'bold',
  },
  profileImage: {
    width: scaleWidth(70),
    height: scaleHeight(70),
    borderRadius: scaleWidth(35),
  },
  banner: {
    width: '100%',
    height: scaleHeight(150),
    borderRadius: scaleWidth(12),
    marginBottom: scaleHeight(20),
    resizeMode: 'cover',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: scaleHeight(12),
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  centerButton: {
    backgroundColor: '#6a1b9a',
    padding: scaleWidth(12),
    borderRadius: scaleWidth(30),
    marginTop: scaleHeight(-30),
  },
});

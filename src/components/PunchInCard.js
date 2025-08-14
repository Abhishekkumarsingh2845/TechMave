import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PunchInCard = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={()=>nav.navigate("Scan")}>
      <View style={styles.topSection}>
        <Text style={styles.label}>Punch in time</Text>
        <Text style={styles.time}>09:00 a.m.</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomLabel}>Total hours worked</Text>
        <Text style={styles.bottomTime}>01:25</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PunchInCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    width: '100%',
  },
  topSection: {
    backgroundColor: '#8277b8', // purple background
    paddingVertical: 20,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  time: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  bottomSection: {
    backgroundColor: '#f0e7fd', // light purple
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bottomLabel: {
    fontSize: 14,
    color: '#333',
  },
  bottomTime: {
    fontSize: 14,
    color: '#333',
  },
});

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PunchOutCard = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={()=>nav.navigate("Scan")}>
      <View style={styles.topSection}>
        <Text style={styles.label}>Punch out time</Text>
        <Text style={styles.time}>06:00 p.m.</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomLabel}>Total hours worked</Text>
        <Text style={styles.bottomTime}>07:00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PunchOutCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007bff', // Blue border
    overflow: 'hidden',
    width: '100%',
    marginVertical: 10,
  },
  topSection: {
    backgroundColor: '#9995ae', // Greyish-purple background
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
    backgroundColor: '#ede1fc', // Light lavender
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bottomLabel: {
    fontSize: 14,
    color: '#000',
  },
  bottomTime: {
    fontSize: 14,
    color: '#000',
  },
});

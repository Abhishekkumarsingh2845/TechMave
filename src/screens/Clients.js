import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { scaleHeight, scaleWidth } from '../utlis/responsive';

const clients = [
  {
    id: '1',
    initials: 'BB',
    name: 'Bruce Banner',
    clientId: '#CL0001',
    location: '456 Elm Avenue, Los Angeles, CA 90012',
    company: 'One clean Pvt. Ltd.',
    phone: '98652356478',
    email: 'alexjhon956@gmail.com',
    workingType: 'Weekly',
    workingHours: '1 hr 30 Min / Day',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  {
    id: '2',
    initials: 'MW',
    name: 'Mike William',
    clientId: '#CL0002',
    location: '456 Elm Avenue, Los Angeles, CA 90012',
    company: 'One clean Pvt. Ltd.',
    phone: '98652356478',
    email: 'alexjhon956@gmail.com',
    workingType: 'Weekly',
    workingHours: '1 hr 30 Min / Day',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
];

const ClientCard = ({ client }) => {
  return (
    <View style={styles.card}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{client.initials}</Text>
        </View>
        <View style={{ marginLeft: scaleWidth(10) }}>
          <Text style={styles.label}>Client Name</Text>
          <Text style={styles.name}>
            {client.name},{' '}
            <Text style={styles.clientId}>{client.clientId}</Text>
          </Text>
        </View>
      </View>

      {/* Location */}
      <View style={styles.locationRow}>
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.locationText}>Location • {client.location}</Text>
      </View>

      {/* Company & Phone */}
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Company Name</Text>
          <Text style={styles.value}>{client.company}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Phone No.</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${client.phone}`)}
          >
            <Text style={[styles.value, styles.link]}>{client.phone}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Email & Working Type */}
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Email</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${client.email}`)}
          >
            <Text style={styles.value}>{client.email}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Working Type & Hour</Text>
          <Text style={styles.value}>
            <Text style={{ color: 'green' }}>{client.workingType}</Text> (
            {client.workingHours})
          </Text>
        </View>
      </View>

      {/* Working Days */}
      <Text style={styles.label}>Working Days</Text>
      <View style={styles.daysRow}>
        {client.days.map((day, index) => (
          <View key={index} style={styles.dayChip}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function ClientsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.topHeader}>
        <Header title="My Clients" />
        <View style={{ width: scaleWidth(20) }} />
      </View>

      {/* Client List */}
      <FlatList
        data={clients}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ClientCard client={item} />}
        contentContainerStyle={{ paddingBottom: scaleHeight(20) }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleWidth(15),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  topHeaderText: { fontSize: scaleWidth(18), fontWeight: '600' },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: scaleWidth(15),
    marginTop: scaleHeight(15),
    borderRadius: scaleWidth(10),
    padding: scaleWidth(15),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: scaleWidth(4),
    shadowOffset: { width: 0, height: 2 },
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(8),
  },
  avatar: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { fontWeight: '600', fontSize: scaleWidth(14) },
  label: { fontSize: scaleWidth(12), color: '#888' },
  name: { fontSize: scaleWidth(14), fontWeight: '600' },
  clientId: { color: '#1E88E5' },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaleHeight(8),
  },
  locationIcon: { fontSize: scaleWidth(14) },
  locationText: {
    fontSize: scaleWidth(13),
    color: '#444',
    marginLeft: scaleWidth(5),
    flexShrink: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scaleHeight(8),
  },
  col: { flex: 1 },
  value: { fontSize: scaleWidth(13), fontWeight: '500', color: '#000' },
  link: { color: '#1E88E5' },
  daysRow: {
    flexDirection: 'row',
    marginTop: scaleHeight(5),
    flexWrap: 'wrap',
  },
  dayChip: {
    backgroundColor: '#1E1B4B',
    paddingHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(5),
    borderRadius: scaleWidth(20),
    marginRight: scaleWidth(5),
    marginBottom: scaleHeight(5),
  },
  dayText: { color: '#fff', fontSize: scaleWidth(12) },
});

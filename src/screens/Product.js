import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';

const sampleImage = require('../assets/images/sample2.png');

const productsData = [
  {
    id: '1',
    name: 'WypAll® L40 Home and Kitchen',
    image: sampleImage,
    quantity: 1,
    selected: true,
  },
  {
    id: '2',
    name: 'WypAll® L40 Home and Kitchen',
    image: sampleImage, 
    quantity: 0,
    selected: false,
  },
  {
    id: '3',
    name: 'Sparkmate By Crystal Premium Soap',
    image: sampleImage,
    quantity: 0,
    selected: false,
  },
];

export default function Product() {
  const [products, setProducts] = useState(productsData);
  const navigation = useNavigation();

  const handleQuantityChange = (id, type) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  const handleSelection = id => {
    setProducts(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.card, item.selected && styles.cardSelected]}
        onPress={() => handleSelection(item.id)}
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>
          {item.selected ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => handleQuantityChange(item.id, 'decrease')}
              >
                <Text style={styles.qtyButton}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => handleQuantityChange(item.id, 'increase')}
              >
                <Text style={styles.qtyButton}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => handleQuantityChange(item.id, 'increase')}
            >
              <Text style={styles.plusOnly}>+</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.checkbox}>
          {item.selected ? <Text style={styles.checked}>✔</Text> : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Products" />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: scaleHeight(80) }}
      />
      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate("Placedorder")}
      >
        <Text style={styles.orderText}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: scaleWidth(16) },
  headerContainer: {
    backgroundColor: '#241c63',
    padding: scaleWidth(16),
    borderRadius: scaleWidth(8),
    marginBottom: scaleHeight(16),
  },
  headerText: {
    fontSize: scaleWidth(22),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: scaleWidth(8),
    padding: scaleWidth(10),
    marginBottom: scaleHeight(12),
    alignItems: 'center',
  },
  cardSelected: {
    borderColor: '#3a2a7c',
    borderWidth: scaleWidth(2),
  },
  image: {
    width: scaleWidth(60),
    height: scaleHeight(60),
    resizeMode: 'contain',
    marginRight: scaleWidth(12),
  },
  content: { flex: 1 },
  title: {
    fontSize: scaleWidth(15),
    fontWeight: '500',
    marginBottom: scaleHeight(8),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    fontSize: scaleWidth(22),
    width: scaleWidth(32),
    height: scaleWidth(32),
    textAlign: 'center',
    lineHeight: scaleWidth(32),
    backgroundColor: '#3a2a7c',
    color: '#fff',
    borderRadius: scaleWidth(4),
  },
  qtyText: {
    fontSize: scaleWidth(16),
    marginHorizontal: scaleWidth(8),
  },
  plusOnly: {
    fontSize: scaleWidth(22),
    color: '#3a2a7c',
    fontWeight: 'bold',
  },
  checkbox: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    fontSize: scaleWidth(16),
    color: 'green',
  },
  orderButton: {
    position: 'absolute',
    bottom: scaleHeight(20),
    left: scaleWidth(16),
    right: scaleWidth(16),
    backgroundColor: '#241c63',
    paddingVertical: scaleHeight(16),
    borderRadius: scaleWidth(14),
    alignItems: 'center',
  },
  orderText: {
    color: '#fff',
    fontSize: scaleWidth(16),
    fontWeight: '600',
  },
});

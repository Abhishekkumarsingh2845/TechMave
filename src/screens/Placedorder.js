import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import img from '../utlis/img';
import Header from '../components/Header';
import { scaleHeight, scaleWidth } from '../utlis/responsive';

const orders = [
  {
    id: '1',
    date: '01 July, 2025',
    status: 'Delivered',
    products: [
      {
        id: 'p1',
        name: 'Sparkmate By Crystal Premium Soap',
        qty: 2,
        image: img.sample2,
      },
      { id: 'p2', name: 'ALOUD CREATIONS', qty: 2, image: img.sample2 },
      {
        id: 'p3',
        name: 'WypAll® L40 Home and Kitchen',
        qty: 1,
        image: img.sample2,
      },
    ],
  },
  {
    id: '2',
    date: '01 July, 2025',
    status: 'Pending',
    products: [
      {
        id: 'p4',
        name: 'Sparkmate By Crystal Premium Soap',
        qty: 2,
        image: img.sample2,
      },
      { id: 'p5', name: 'ALOUD CREATIONS', qty: 2, image: img.sample2 },
      {
        id: 'p6',
        name: 'WypAll® L40 Home and Kitchen',
        qty: 1,
        image: img.sample2,
      },
    ],
  },
];

export default function PlacedOrder() {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        <Header title="" />
        <View style={{ width: scaleWidth(20) }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: scaleHeight(20) }}
      >
        {orders.map(order => (
          <View style={styles.card} key={order.id}>
            {/* Order Header */}
            <View style={styles.orderHeader}>
              <Text style={styles.orderDate}>
                Ordered On - <Text style={styles.dateBold}>{order.date}</Text>
              </Text>
              <View
                style={[
                  styles.statusContainer,
                  {
                    borderColor:
                      order.status === 'Delivered' ? '#4CAF50' : '#FFA500',
                  },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    {
                      color:
                        order.status === 'Delivered' ? '#4CAF50' : '#FFA500',
                    },
                  ]}
                >
                  {order.status} Order
                </Text>
              </View>
            </View>

            {/* Products */}
            {order.products.map(product => (
              <View style={styles.productRow} key={product.id}>
                <View style={styles.productImageWrapper}>
                  <Image
                    source={
                      typeof product.image === 'string'
                        ? { uri: product.image }
                        : product.image
                    }
                    style={styles.productImage}
                  />
                </View>
                <View>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.qtyText}>Qty - {product.qty}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleWidth(15),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
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
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: scaleHeight(6),
    marginBottom: scaleHeight(8),
  },
  orderDate: { fontSize: scaleWidth(13), color: '#555' },
  dateBold: { fontWeight: 'bold', color: '#000' },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: scaleHeight(2),
    paddingHorizontal: scaleWidth(6),
    borderRadius: scaleWidth(6),
  },
  statusText: { fontSize: scaleWidth(12), fontWeight: '500' },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(12),
  },
  productImageWrapper: {
    width: scaleWidth(50),
    height: scaleWidth(50),
    backgroundColor: '#F8F8F8',
    borderRadius: scaleWidth(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(10),
  },
  productImage: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    resizeMode: 'contain',
  },
  productName: {
    fontSize: scaleWidth(13),
    fontWeight: '500',
    color: '#000',
    marginBottom: scaleHeight(2),
  },
  qtyText: { fontSize: scaleWidth(12), color: '#777' },
});

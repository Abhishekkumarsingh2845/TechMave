import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Scan from '../screens/Scan';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Center button logic
        if (route.name === 'CenterButton') {
          return (
            <TouchableOpacity
              key={route.key}
              style={styles.centerButton}
              onPress={() => navigation.navigate('Scan')}
            >
              <Image
                source={require('../assets/images/Home.png')} // your center icon
                style={{ width: 28, height: 28, tintColor: '#fff' }}
              />
            </TouchableOpacity>
          );
        }

        // Images for tabs
        let iconSource;
        if (route.name === 'Home') {
          iconSource = require('../assets/images/Home1.png');
        } else if (route.name === 'Product') {
          iconSource = require('../assets/images/scan.png');
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: isFocused ? '#241E63' : '#888',
              }}
            />
            <Text
              style={{
                color: isFocused ? '#241E63' : '#888',
                fontSize: 12,
                marginTop: 2,
                marginLeft:10,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CenterButton" component={Scan} />
      <Tab.Screen name="Product" component={Product} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    flex: 1,
  },
  centerButton: {
    width: 60,
    height: 60,
    backgroundColor: '#241E63',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30, // lift above tab bar
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

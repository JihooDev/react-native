import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Home from '../home/Home';

const Header = ({navigation}) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.logo}
          onPress={() => {
            navigation.navigate('Header');
          }}>
          <View style={styles.logo_box}>
            <Image
              source={require('../../asset/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.logo_text}>TODOAPP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TodoList');
          }}>
          <Text style={styles.menu}>오늘 할 일</Text>
        </TouchableOpacity>
      </View>
      <Home />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#809BCE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo_box: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo_text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Dongle-Bold',
  },
  logo: {
    width: 70,
    height: 70,
  },
  menu: {
    fontSize: 13,
    marginRight: 3,
    fontWeight: 'bold',
    fontFamily: 'Dongle',
    color: '#000',
  },
});

export default Header;

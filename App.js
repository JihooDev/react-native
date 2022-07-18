/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import TodoList from './src/component/todo_list/TodoList';
import Header from './src/component/header/Header';

const Tab = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Text>이동</Text>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={TodoList}
            options={{title: 'welcome'}}
          />
          <Tab.Screen name="header" component={Header} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

import React, {useRef} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import TodoItem from '../todo_item/TodoItem';

const TodoList = ({navigation}) => {
  return (
    <View style={styles.card}>
      <Button
        title="이동"
        onPress={() => navigation.navigate('header', {name: 'Jane'})}
      />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '70%',
    height: '90%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    borderRadius: 30,
    padding: 30,
  },
  card_text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3143e8',
    textAlign: 'center',
  },
  input_box: {
    display: 'flex',
  },
  btn: {
    borderRadius: 50,
  },
});

export default TodoList;

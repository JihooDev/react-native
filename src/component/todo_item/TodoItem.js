import React from 'react';
import {ScrollView, View, Text} from 'react-native';

const TodoItem = ({data}) => {
  return (
    <ScrollView>
      {data.map(it => {
        return (
          <View>
            <Text>{it}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TodoItem;

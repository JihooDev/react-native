import React, {useEffect, useRef, useState} from 'react';
import * as native from 'react-native';
import TodoItem from '../todo_item/TodoItem';

const TodoList = () => {
  const [todoData, setTodoData] = useState([]);
  const [addData, setAddData] = useState('');
  const dataId = useRef(1);

  const changeData = text => {
    setAddData(text);
  };

  const addContent = () => {
    if (addData.length > 1) {
      setTodoData([...todoData, {data: addData, id: dataId.current}]);
      dataId.current++;
    } else {
      alert('1글자 이상 입력해주세요');
    }
    todoData.sort((a, b) => b.id - a.id);
    setAddData('');
  };

  return (
    <native.SafeAreaView style={styles.todo_list}>
      <native.View>
        <native.Text style={styles.main_text}>TodoList</native.Text>
      </native.View>
      <native.View style={styles.todo_container}>
        <native.View style={styles.todo_box}>
          <native.View style={styles.input_box}>
            <native.TextInput
              placeholder="오늘 할 일을 기록하세요"
              keyboardType="web-search"
              style={styles.input}
              value={addData}
              onChangeText={changeData}
            />
            <native.TouchableOpacity style={styles.btn} onPress={addContent}>
              <native.Text style={styles.btn_text}>ADD</native.Text>
            </native.TouchableOpacity>
          </native.View>
          <native.Text style={styles.data_length}>
            {todoData.length}개의 할 일이 있으시네요!
          </native.Text>
          <native.ScrollView style={styles.list}>
            {todoData
              .map(it => {
                return <TodoItem data={it} />;
              })
              .sort((a, b) => a.id - b.id)}
          </native.ScrollView>
        </native.View>
      </native.View>
    </native.SafeAreaView>
  );
};

const styles = native.StyleSheet.create({
  todo_list: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  main_text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  todo_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#B8E0D2',
  },
  btn: {
    backgroundColor: '#D6EADF',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  btn_text: {
    fontWeight: 'bold',
    color: '#000',
  },
  todo_box: {
    width: '90%',
    height: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  data_length: {
    textAlign: 'right',
    fontSize: 12,
    padding: 10,
    backgroundColor: '#eee',
  },
});

export default TodoList;

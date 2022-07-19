import React, {useEffect} from 'react';
import * as native from 'react-native';

const TodoItem = ({data}) => {
  useEffect(() => {
    console.log('데이터', data.data);
  }, []);
  return (
    <native.View style={styles.container}>
      <native.Text style={styles.text}>{data.data}</native.Text>
      <native.View style={styles.edit_box}>
        <native.TouchableOpacity>
          <native.Text style={styles.edit_text}>수정</native.Text>
        </native.TouchableOpacity>
        <native.TouchableOpacity>
          <native.Text style={styles.edit_text}>삭제</native.Text>
        </native.TouchableOpacity>
      </native.View>
    </native.View>
  );
};

const styles = native.StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#3333ff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  edit_box: {
    flexDirection: 'row',
  },
  edit_text: {
    margin: 5,
    backgroundColor: '#000',
    padding: 5,
    color: '#fff',
    borderRadius: 10,
    fontSize: 13,
  },
});

export default TodoItem;

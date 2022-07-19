import React, {useEffect, useState} from 'react';
import * as native from 'react-native';

const TodoItem = ({it, deleteTodo, onEditData}) => {
  const [editData, setEditData] = useState(false);
  const [editContent, setEditContent] = useState(it.data);

  return (
    <native.View style={editData ? styles.edit_container : styles.container}>
      <native.View style={styles.container}>
        <native.Text style={styles.text}>{it.data}</native.Text>
        <native.View style={styles.edit_box}>
          <native.TouchableOpacity>
            <native.Text
              style={styles.edit_text}
              onPress={() => {
                deleteTodo(it.id);
              }}>
              삭제
            </native.Text>
          </native.TouchableOpacity>
          <native.TouchableOpacity
            onPress={() => {
              setEditData(!editData);
            }}>
            {editData ? (
              <native.Text
                style={styles.edit_text}
                onPress={() => {
                  onEditData(it.id, editContent);
                }}>
                수정완료
              </native.Text>
            ) : (
              <native.Text style={styles.edit_text}>수정</native.Text>
            )}
          </native.TouchableOpacity>
        </native.View>
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
  edit_container: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#de3c4b',
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
    padding: 7,
    color: '#fff',
    borderRadius: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
  edit_content: {
    padding: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#9c9fab',
    marginLeft: 3,
    width: 150,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodoItem;

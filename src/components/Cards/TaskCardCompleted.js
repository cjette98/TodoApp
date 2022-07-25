import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const TaskCardCompleted = ({data}) => {
  const {item} = data;
  return (
    <View style={styles.container}>
      <Icon name={'md-checkbox-outline'} size={24} color={'#B9B9BE'} />
      <Text style={styles.taskName}>{item.title}</Text>
    </View>
  );
};

export default TaskCardCompleted;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
  },
  taskName: {
    left: 16,
    fontSize: 18,
    color: '#B9B9BE',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});

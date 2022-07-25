import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskCardDeleteComponent = onClick => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onClick} style={styles.buttonWrapper}>
        <Icon name={'trash'} size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskCardDeleteComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 0,
    alignContent: 'center',
    justifyContent: 'center',
    width: 70,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 60,
  },
});

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
const TaskCardsIncomplete = ({item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="check-box-outline-blank" size={24} />
      </TouchableOpacity>
      <View style={{left: 16}}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.time}>⏰ {moment(item.due_at).format('lll')}</Text>
      </View>
    </View>
  );
};

export default TaskCardsIncomplete;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  itemTitle: {fontSize: 18, fontWeight: '600'},
  time: {fontSize: 14, fontWeight: 'normal'},
});

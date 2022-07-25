import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TaskCardsIncomplete from '../components/Cards/TaskCardsIncomplete';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler/';

import TaskCardDeleteComponent from '../components/Cards/TaskCardDeleteComponent';
import TaskCardCompleted from '../components/Cards/TaskCardCompleted';

import {LABEL} from '../constant/constants';
import styles from '../styles/TaskScreenStyle';
import Reminder from '../components/Modal/Reminder';
const TaskScreen = ({navigation}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setIsShowModal(!isShowModal);
  }, []);

  let row = [];
  let prevOpenedRow;
  const data = [
    {
      id: 61,
      user_id: 5,
      title: 'Task On',
      description: 'Task Description updated test',
      status: 'completed',
      due_at: '2021-03-23 11:30:00',
      created_at: '2021-03-29T07:23:13.000000Z',
      updated_at: '2022-06-13T20:25:15.000000Z',
      deleted_at: null,
    },
  ];

  const renderItem = ({item, index}, onClick) => {
    const closeRow = index => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };
    const renderRightActions = (progress, dragX, onClick) => {
      return <TaskCardDeleteComponent onClick={onClick} />;
    };
    return (
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={(progress, dragX) =>
            renderRightActions(progress, dragX, onClick)
          }
          onSwipeableOpen={() => closeRow(index)}
          ref={ref => (row[index] = ref)}
          rightOpenValue={-100}>
          <TaskCardsIncomplete item={item} />
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLbl}>{LABEL.TASK_LABEL}</Text>
      </View>
      <View style={{marginBottom: 30}}>
        <TouchableOpacity onPress={() => navigation.navigate('NewTaskScreen')}>
          <Text style={styles.addNewTask}>{LABEL.ADD_NEW_TASK_LABEL}</Text>
        </TouchableOpacity>
      </View>

      <View style={{height: 300}}>
        <Text style={styles.lblTitle}>{LABEL.INCOMPLETTE_TASK_LABEL}</Text>
        <FlatList
          data={data}
          renderItem={v =>
            renderItem(v, () => {
              // deleteItem(v);
            })
          }
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <Text style={styles.lblTitle}>{LABEL.COMPLETED_TASK_LABEL}</Text>
        <FlatList
          data={data}
          renderItem={item => <TaskCardCompleted data={item} />}
          keyExtractor={item => item.id}
        />
      </View>

      {/* Modal */}
      <Reminder
        isShow={isShowModal}
        action={() => setIsShowModal(!isShowModal)}
      />
    </SafeAreaView>
  );
};

export default TaskScreen;

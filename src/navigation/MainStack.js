import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR} from '../constant/Theme';
import {TaskScreen, Location} from '../screens';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {AddIcon} from '../constant/icon';
const Tab = createBottomTabNavigator();

const MainTabNavigator = ({navigation}) => {
  const CustomButton = ({children, onPress}) => {
    return (
      <TouchableOpacity
        style={{
          top: -30,
        }}
        onPress={() => navigation.navigate('NewTaskScreen')}>
        <View>{children}</View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Task"
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <Tab.Screen
        name={'Task'}
        component={TaskScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name={'tasks'}
              size={20}
              style={styles.icon}
              color={focused ? COLOR.PRIMARY_LIGHT : '#C4C4C4'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.label,
                {
                  color: focused ? COLOR.PRIMARY_LIGHT : '#C4C4C4',
                  fontWeight: focused ? 'bold' : 'normal',
                },
              ]}>
              Task
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={'new Task'}
        component={Location}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View>
              <Image source={AddIcon} />
            </View>
          ),
          tabBarLabel: ({focused}) => <View />,
          tabBarButton: props => <CustomButton {...props} />,
        }}
      />

      <Tab.Screen
        name={'Location'}
        component={Location}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IconIonicons
              name={'location-outline'}
              size={26}
              style={styles.icon}
              color={focused ? COLOR.PRIMARY_LIGHT : '#C4C4C4'}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.label,
                {
                  color: focused ? COLOR.PRIMARY_LIGHT : '#C4C4C4',
                  fontWeight: focused ? 'bold' : 'normal',
                },
              ]}>
              Location
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
  icon: {
    marginBottom: -2,
  },
  label: {
    fontSize: 12,
  },
});

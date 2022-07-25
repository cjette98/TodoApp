import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../constant/Theme';
const {width} = Dimensions.get('screen');
const CustomButton = ({label, action}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={action}>
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLOR.PRIMARY,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  btnLabel: {
    color: 'white',
  },
});

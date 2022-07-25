import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../../constant/Theme';
import CustomButton from '../CustomButton/CustomButton';

const Reminder = ({isShow, action}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isShow}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.accountLabel}>Reminder</Text>
            <Text
              style={
                styles.secondLabel
              }>{`Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.`}</Text>
          </View>

          <View>
            <CustomButton label={'Remind me again'} action={action} />
            <TouchableOpacity style={styles.skipButton}>
              <Text style={styles.skipButtonLbl}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(123,121,115, 0.5)',
  },
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    padding: 10,
  },
  closelabel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  accountLabel: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: '700',
    color: COLOR.PRIMARY,
  },
  secondLabel: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  skipButton: {
    marginVertical: 18,
    alignItems: 'center',
  },
  skipButtonLbl: {
    color: COLOR.PRIMARY,
    fontSize: 16,
    fontWeight: '700',
  },
});

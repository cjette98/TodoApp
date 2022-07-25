import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import styles from '../styles/LoginScreenStyle';
import {Login} from '../services/todo';

const LoginScreen = ({navigation}) => {
  const [isShow, setIsShow] = React.useState(false);
  const btnLogin = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.loginHeaderContainer}>
        <Text style={styles.loginHeader}>Login In</Text>
        <TextInput placeholder="Email" style={[styles.input]} />
        <View
          style={[
            {
              backgroundColor: '#E8E8E8',
              borderRadius: 5,
              paddingHorizontal: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <TextInput
            secureTextEntry={!isShow ? true : false}
            placeholder="Password"
          />
          <TouchableOpacity onPress={() => setIsShow(!isShow)}>
            <Text>{isShow ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Header */}

      {/* Footer */}
      <View style={styles.footerContainer}>
        <CustomButton label={'Log in'} action={btnLogin} />
        <Text style={styles.lblForgot}>Forgot Password?</Text>
      </View>
      {/* End Footer */}
    </View>
  );
};

export default LoginScreen;

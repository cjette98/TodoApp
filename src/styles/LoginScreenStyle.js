import {StyleSheet} from 'react-native';
import {COLOR, SIZES} from '../constant/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  loginHeaderContainer: {
    marginTop: 30,
  },
  loginHeader: {
    textAlign: 'center',
    color: COLOR.PRIMARY,
    fontSize: SIZES.lg,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    padding: 10,
    marginVertical: 16,
  },
  footerContainer: {
    alignItems: 'center',
  },
  lblForgot: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 24,
    color: COLOR.PRIMARY,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {SIZES, COLOR} from '../constant/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 32,
  },
  headerLbl: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLOR.PRIMARY,
  },
  lblTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  addNewTask: {
    fontWeight: 'bold',
    fontSize: SIZES.md,
    color: '#575767',
  },
});

export default styles;

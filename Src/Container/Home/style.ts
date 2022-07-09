import {StyleSheet} from 'react-native';
import COLORS from '../../Utils/Colors';
import {scale} from '../../Utils/Helper/Scalling';
const styles = StyleSheet.create({
  mainContainer: {flex: scale(1), backgroundColor: COLORS.BLACK},
  contentContainer: {
    marginHorizontal: scale(10),
    marginVertical: scale(25),
  },
});
export default styles;

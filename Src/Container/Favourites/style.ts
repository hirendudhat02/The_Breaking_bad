import {StyleSheet} from 'react-native';
import COLORS from '../../Utils/Colors';
import {scale} from '../../Utils/Helper/Scalling';
const styles = StyleSheet.create({
  mainContainer: {flex: scale(1), backgroundColor: COLORS.BLACK},
  flatMainContainer: {
    marginHorizontal: scale(7),
    marginVertical: scale(15),
  },
});
export default styles;

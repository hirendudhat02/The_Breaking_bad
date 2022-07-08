import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/Helper/Scalling';
import COLORS from '../../Utils/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    marginVertical: scale(15),
  },
  HeadTextContainer: {
    flex: 0.8,
    marginHorizontal: scale(17),
  },
  headText: {
    fontSize: scale(21.5),
    fontWeight: '700',
    color: COLORS.WHITE,
  },
  headimageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.2,
    marginHorizontal: scale(15),
  },
});
export default styles;

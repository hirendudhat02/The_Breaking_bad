import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../Utils/Colors';
import {scale} from '../../Utils/Helper/Scalling';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  itemStyle: {
    padding: scale(10),
  },
  textInputStyle: {
    height: scale(60),
    width: Dimensions.get('screen').width / 1,
    borderRadius: scale(0),
    backgroundColor: COLORS.LIGHT_BLACK,
  },
  textStyle: {
    fontSize: scale(25),
    color: COLORS.WHITE,
    fontWeight: '100',
  },
  NoCharText: {
    fontSize: scale(24),
    fontWeight: '300',
    lineHeight: scale(28),
    color: COLORS.LIGHT_GREEN,
    fontFamily: 'Roboto',
  },
  tryText: {
    fontSize: scale(24),
    fontWeight: '300',
    lineHeight: scale(28),
    color: COLORS.SILVER,
    fontFamily: 'Roboto',
  },
  dataNotFoundContaner: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
    alignItems: 'center',
    marginVertical: scale(50),
  },

  contentContainer: {
    marginHorizontal: scale(10),
    marginVertical: scale(25),
  },
  ProfileImageStyle: {height: scale(194), width: scale(150)},
  searchcloseButton: {tintColor: COLORS.WHITE},
});
export default styles;

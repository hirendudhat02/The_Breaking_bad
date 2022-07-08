import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/Helper/Scalling';
import COLORS from '../../Utils/Colors';

const styles = StyleSheet.create({
  flatMainContainer: {
    marginHorizontal: scale(7),
    marginVertical: scale(15),
  },
  flatSubContainer: {flexDirection: 'column'},
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scale(10),
  },
  textContainer: {flexDirection: 'column', justifyContent: 'space-between'},
  flatHeadText: {
    color: COLORS.WHITE,
    fontSize: scale(16),
    fontWeight: '700',
    lineHeight: scale(19),
  },
  flatSubText: {
    color: COLORS.WHITE,
    fontSize: scale(11),
    fontWeight: '300',
    lineHeight: scale(18),
  },
  likeImage: {
    height: scale(20),
    width: scale(20),
    alignSelf: 'flex-start',
    marginRight: scale(4),
  },
  ProfileImageStyle: {height: scale(194), width: scale(150)},
});
export default styles;

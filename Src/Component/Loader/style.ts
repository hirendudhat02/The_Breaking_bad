import {StyleSheet} from 'react-native';
import {scale} from '../../Utils/Helper/Scalling';

const styles = StyleSheet.create({
  Container: {
    flex: scale(1),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
    left: scale(0),
    right: scale(0),
    top: scale(0),
    bottom: scale(0),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;

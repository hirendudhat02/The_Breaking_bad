import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';
import COLORS from '../../Utils/Colors';
import styles from './style';
interface Props {
  value: boolean;
}

const Loader = ({value}: Props) => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={value}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <View style={styles.Container}>
        <ActivityIndicator size="large" color={COLORS.WHITE} />
      </View>
    </Modal>
  );
};

export default Loader;

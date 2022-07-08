import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {scale} from '../../Utils/Helper/Scalling';
import styles from './style';

interface itemProps {
  profile?: any;
  headText?: string;
  subText?: string;
  likeButton?: any;
  likeFillButton?: any;
  likeOnPress?: () => void;
  onPress?: () => void;
}
const Item = (props: itemProps) => {
  const {
    profile,
    headText,
    subText,
    likeButton,
    likeOnPress,
    onPress,
    likeFillButton,
  } = props;
  return (
    <View style={styles.flatMainContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.flatSubContainer}>
          <Image source={{uri: profile}} style={styles.ProfileImageStyle} />
          <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.flatHeadText}>{headText}</Text>
              <Text style={styles.flatSubText}>{subText}</Text>
            </View>
            <TouchableOpacity onPress={likeOnPress}>
              <Image source={likeFillButton} style={styles.likeImage} />
              <Image source={likeButton} style={styles.likeImage} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Item;

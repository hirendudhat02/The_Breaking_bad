import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {scale} from '../../Utils/Helper/Scalling';
import ICONS from '../../Utils/Images';
import styles from './style';

interface itemProps {
  profile?: any;
  headText?: string;
  subText?: string;
  likeButton?: any;
  likeFillButton?: any;
  likeOnPress?: () => void;
  onPress?: () => void;
  itemFav?: any;
  item?: any;
}
const Item = (props: itemProps) => {
  const {profile, headText, subText, likeOnPress, onPress, item} = props;
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
              {item === undefined ? (
                <Image source={ICONS.LIKE} style={styles.likeImage} />
              ) : item === true ? (
                <Image source={ICONS.LIKE_FILL} style={styles.likeImage} />
              ) : (
                <Image source={ICONS.LIKE} style={styles.likeImage} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Item;

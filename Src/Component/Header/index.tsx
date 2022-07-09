import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

interface headerProps {
  headText?: string;
  searchImage?: any;
  image?: any;
  likeOnPress?: () => void;
  searchOnPress?: () => void;
}

const Header = (props: headerProps) => {
  const {headText, searchImage, image, likeOnPress, searchOnPress} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.HeadTextContainer}>
        <Text
          style={
            headText == 'Favourites' ? styles.favheadText : styles.headText
          }>
          {headText}
        </Text>
      </View>
      <View style={styles.headimageContainer}>
        <TouchableOpacity onPress={searchOnPress}>
          <Image source={searchImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={likeOnPress}>
          <Image source={image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;

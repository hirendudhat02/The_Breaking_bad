import React from 'react';
import {View, Text, SafeAreaView, Alert, FlatList} from 'react-native';
import Item from '../../Component/ItemComp';
import Status from '../../Component/StatusBar';
import Header from '../../Component/Header';
import ICONS from '../../Utils/Images';
import styles from './style';
import {scale} from '../../Utils/Helper/Scalling';
const data = [
  {
    id: 1,
    text: 'Walter White',
    image: require('../../../Assets/Icons/image.png'),
    subText: 'Heisenberg',
    likeImage: ICONS.LIKE,
  },
  {
    id: 2,
    text: 'Walter White',
    image: require('../../../Assets/Icons/image.png'),
    subText: 'Heisenberg',
    likeImage: ICONS.LIKE,
  },
  {
    id: 3,
    text: 'Walter White',
    image: require('../../../Assets/Icons/image.png'),
    subText: 'Heisenberg',
    likeImage: ICONS.LIKE,
  },
];
const Favourite = () => {
  const dataRenderItem = ({item, index}) => (
    <Item
      profile={item.image}
      headText={item.text}
      subText={item.subText}
      likeButton={item.likeImage}
      onPress={() => Alert.alert('Profilr Open')}
      likeOnPress={() => Alert.alert('Like button Press')}
    />
  );
  return (
    <View style={styles.mainContainer}>
      <Status />
      <SafeAreaView style={styles.mainContainer}>
        <Header
          headText="The Breaking bad"
          searchImage={ICONS.SEARCH}
          image={ICONS.LIKE_FILL}
        />
        <FlatList
          data={data}
          renderItem={dataRenderItem}
          numColumns={2}
          contentContainerStyle={{marginHorizontal: scale(10)}}
        />
      </SafeAreaView>
    </View>
  );
};
export default Favourite;

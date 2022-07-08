import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../Component/Header';
import Item from '../../Component/ItemComp';
import Status from '../../Component/StatusBar';
import {
  characterRequest,
  favouriteData,
} from '../../Redux/Action/CharacterAction';
import {scale} from '../../Utils/Helper/Scalling';
import ICONS from '../../Utils/Images';
import styles from './style';

// const data = [
//   {
//     id: 1,
//     text: 'Walter White',
//     image: require('../../../Assets/Icons/image.png'),
//     subText: 'Heisenberg',
//     likeImage: ICONS.LIKE,
//   },
//   {
//     id: 2,
//     text: 'Walter White',
//     image: require('../../../Assets/Icons/image.png'),
//     subText: 'Heisenberg',
//     likeImage: ICONS.LIKE,
//   },
//   {
//     id: 3,
//     text: 'Walter White',
//     image: require('../../../Assets/Icons/image.png'),
//     subText: 'Heisenberg',
//     likeImage: ICONS.LIKE,
//   },
// ];
const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const characterRes = useSelector((state: any) => state.charReducer);
  console.log('characterRes::::', characterRes);

  useEffect(() => {
    if (characterRes.data !== null) {
      setData(characterRes.data);
      console.log('==================================================');
      console.log(
        'characterRes.data::::::::::::::::::::::::::::',
        characterRes.data,
      );
      console.log('==================================================');
    } else {
      console.log('errror:::::::');
      //   dispatch(characterRequest());
    }
  }, []);
  useEffect(() => {
    dispatch(characterRequest());
  }, []);

  const likePress = (item, index) => {
    dispatch(favouriteData(index));
  };
  const dataRenderItem = ({item, index}) => (
    console.log('index:::::::::', index),
    console.log('item:::::::', item),
    console.log('item.fav:::::::', item.fav),
    console.log('index.fav:::::::', index.fav),
    (
      <View style={styles.flatMainContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Profilr Open')}>
          <View style={styles.flatSubContainer}>
            <Image source={{uri: item.img}} style={styles.ProfileImageStyle} />
            <View style={styles.itemContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.flatHeadText}>{item.name}</Text>
                <Text style={styles.flatSubText}>{item.nickname}</Text>
              </View>
              <TouchableOpacity onPress={() => likePress(item, index)}>
                {index.fav == undefined ? (
                  <Image source={ICONS.LIKE} style={styles.likeImage} />
                ) : index.fav == true ? (
                  <Image source={ICONS.LIKE_FILL} style={styles.likeImage} />
                ) : (
                  <Image source={ICONS.LIKE} style={styles.likeImage} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  );
  return (
    <View style={styles.mainContainer}>
      <Status />
      <SafeAreaView style={styles.mainContainer}>
        <Header
          headText="The Breaking bad"
          searchImage={ICONS.SEARCH}
          image={ICONS.LIKE_FILL}
          searchOnPress={() => navigation.navigate('Search')}
          likeOnPress={() => navigation.navigate('Favourite')}
        />
        <FlatList
          data={data}
          renderItem={dataRenderItem}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      </SafeAreaView>
    </View>
  );
};
export default Home;

import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Alert, FlatList} from 'react-native';
import Item from '../../Component/ItemComp';
import Status from '../../Component/StatusBar';
import Header from '../../Component/Header';
import ICONS from '../../Utils/Images';
import styles from './style';
import {scale} from '../../Utils/Helper/Scalling';
import {useSelector, useDispatch} from 'react-redux';
import {favouriteData} from '../../Redux/Action/CharacterAction';
import {LoaderAction} from '../../Redux/Action/LoaderAction';

import Loader from '../../Component/Loader';
const Favourite = ({navigation}) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const characterRes = useSelector((state: any) => state.charReducer);
  console.log('Favourite characterRes::::', characterRes);

  const loaderRes = useSelector((state: any) => state.loader);
  console.log('Favourite characterRes::::', loaderRes);

  useEffect(() => {
    if (characterRes.data !== null) {
      let Data = [];

      characterRes.data.map((item: any) => {
        if (item.fav === true) {
          Data.push(item);
        }
      });
      setData(Data);
    } else {
      console.log('null useeffect');
      dispatch(LoaderAction(true));
    }
  }, [characterRes]);
  const likePress = index => {
    dispatch(favouriteData(index));
  };
  const dataRenderItem = ({item, index}) => (
    <Item
      profile={item.img}
      headText={item.name}
      subText={item.nickname}
      likeButton={item.fav}
      onPress={() => Alert.alert('Profile Open')}
      likeOnPress={() => likePress(index)}
      item={item.fav}
    />
  );
  return (
    <View style={styles.mainContainer}>
      <Loader value={loaderRes.loader} />
      <Status />
      <SafeAreaView style={styles.mainContainer}>
        <Header
          headText="Favourites"
          image={ICONS.CLOSE}
          likeOnPress={() => navigation.goBack()}
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

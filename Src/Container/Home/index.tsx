import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../Component/Header';
import Item from '../../Component/ItemComp';
import Status from '../../Component/StatusBar';
import {
  characterRequest,
  favouriteData,
} from '../../Redux/Action/CharacterAction';
import {LoaderAction} from '../../Redux/Action/LoaderAction';
import ICONS from '../../Utils/Images';
import styles from './style';
import Loader from '../../Component/Loader';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const characterRes = useSelector((state: any) => state.charReducer);

  const loaderRes = useSelector((state: any) => state.loader);

  useEffect(() => {
    if (characterRes.data !== null) {
      setData(characterRes.data);
    } else {
      console.log('null useeffect');
    }
  }, [characterRes]);
  useEffect(() => {
    dispatch(characterRequest());
    dispatch(LoaderAction(true));
  }, []);

  const likePress = index => {
    dispatch(favouriteData(index));
  };
  const dataRenderItem = ({item, index}) => (
    <Item
      profile={item.img}
      headText={item.name}
      subText={item.nickname}
      onPress={() => Alert.alert('Profilr Open')}
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

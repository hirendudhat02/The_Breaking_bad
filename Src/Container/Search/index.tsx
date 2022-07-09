import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList, Alert} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import COLORS from '../../Utils/Colors';
import {useDispatch, useSelector} from 'react-redux';
import ICONS from '../../Utils/Images';
import {
  characterRequest,
  favouriteData,
} from '../../Redux/Action/CharacterAction';
import styles from './style';
import {LoaderAction} from '../../Redux/Action/LoaderAction';
import Loader from '../../Component/Loader/index';
import Item from '../../Component/ItemComp';

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const dispatch = useDispatch();

  const characterRes = useSelector((state: any) => state.charReducer);

  const loaderRes = useSelector((state: any) => state.loader);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (characterRes.data !== null) {
      if (text) {
        const newData = characterRes.data.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) != -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        console.log('else part run:::::::::::::');

        setFilteredDataSource(characterRes.data);
        setSearch(text);
      }
    } else {
      console.log('null useeffect');
      dispatch(LoaderAction(true));
      dispatch(characterRequest());
    }
  };
  const likePress = index => {
    dispatch(favouriteData(index));
  };
  const ItemView = ({item, index}) => (
    <Item
      profile={item.img}
      headText={item.name}
      subText={item.nickname}
      onPress={() => Alert.alert('Profile Open')}
      likeOnPress={() => likePress(index)}
      item={item.fav}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Loader value={loaderRes.loader} />
      <View style={styles.container}>
        <SearchBar
          style={styles.textInputStyle}
          value={search}
          onChangeText={text => searchFilterFunction(text)}
          placeholder="Search"
          placeholderTextColor={COLORS.SILVER}
          textInputStyle={styles.textStyle}
          searchIconImageSource={ICONS.BACK}
          onSearchPress={() => navigation.goBack()}
          clearIconImageStyle={styles.searchcloseButton}
        />
        {search.length == 0 ? (
          <View style={styles.dataNotFoundContaner}>
            <Text style={styles.NoCharText}>No character found</Text>
            <Text style={styles.tryText}>Try gain</Text>
          </View>
        ) : (
          <FlatList
            data={filteredDataSource}
            renderItem={ItemView}
            numColumns={2}
            contentContainerStyle={styles.contentContainer}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

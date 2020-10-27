import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import Colors from '../../themes/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {bannerActions} from '../../redux';
import {WIDTH} from '../../ultils/Constants';
import {Header, Banners} from './components';
import {Loader} from '../../components/Loader';
// Animated Flatlist
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.banners.isLoading);
  const scrollY = new Animated.Value(0);
  let data = [];
  for (let i = 0; i <= 5; i++) {
    data.push({name: i});
  }
  useEffect(() => {
    dispatch(bannerActions.getBanner());
  }, []);
  return (
    <View style={styles.container}>
      {isLoading && <Loader style={{backgroundColor: Colors.white}} />}
      <Header scrollY={scrollY} />
      <AnimatedFlatList
        data={data}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Banners navigation={navigation} />}
        renderItem={({item}) => (
          <View
            style={{
              height: 200,
              width: WIDTH,
              backgroundColor: Colors.grey,
              marginBottom: 10,
            }}>
            <Text>{item.name}</Text>
          </View>
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  list: {
    marginTop: 210,
  },
});

export default HomeScreen;

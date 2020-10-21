import React, {useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import Colors from '../../ultils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../redux';
import {WIDTH} from '../../ultils/constant';
import {Banners, Header} from './components';
// Animated Flatlist
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HomeScreen = () => {
  const dispatch = useDispatch();
  const scrollY = new Animated.Value(0);
  let data = [];
  for (let i = 0; i <= 5; i++) {
    data.push({name: i});
  }
  console.log(data);
  return (
    <View style={styles.container}>
      <Header scrollY={scrollY} />
      <AnimatedFlatList
        data={data}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Banners />}
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

import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ShadowView} from '../../../components/Shadow';
import {WIDTH} from '../../../ultils/Constants';
import {useSelector} from 'react-redux';
import propTypes from 'prop-types';

let CurrentSlide = 0;
let IntervalTime = 4000;
const BANNER_HEIGHT = 200;

export const Banners = ({navigation}) => {
  const scrollX = useRef();
  const BANNERS = useSelector((state) => state.banners.banners);
  // TODO _goToNextPage()
  const _goToNextPage = () => {
    if (CurrentSlide >= BANNERS.length - 1) {
      CurrentSlide = -1;
    }
    scrollX.current.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };
  let _timerId;
  const _startAutoPlay = () => {
    _timerId = setInterval(_goToNextPage, IntervalTime);
  };

  const _stopAutoPlay = () => {
    if (_timerId) {
      clearInterval(_timerId);
      _timerId = null;
    }
  };

  useEffect(() => {
    _startAutoPlay();
    return () => _stopAutoPlay();
  }, []);

  const moveToDetail = (item) => {
    navigation.navigate('BannerDetailScreen', {item});
  };

  return (
    <View>
      <FlatList
        data={BANNERS}
        horizontal
        decelerationRate="fast"
        snapToInterval={WIDTH}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ShadowView style={styles.bannerWrapper}>
            <TouchableOpacity onPress={() => moveToDetail(item._data)}>
              <Image
                style={styles.banner}
                source={{
                  uri: item._data.img,
                }}
              />
            </TouchableOpacity>
          </ShadowView>
        )}
        ref={scrollX}
      />
    </View>
  );
};
Banners.propTypes = {
  navigation: propTypes.object.isRequired,
};
const styles = StyleSheet.create({
  bannerWrapper: {
    width: WIDTH,
    height: BANNER_HEIGHT,
    alignItems: 'center',
  },
  banner: {
    resizeMode: 'stretch',
    width: WIDTH - 40,
    height: '100%',
    borderRadius: 10,
  },
});

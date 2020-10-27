import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {ShadowView} from '../../../components/Shadow';
import {WIDTH} from '../../../ultils/Constants';
import Colors from '../../../themes/Colors';
import {useSelector} from 'react-redux';
import propTypes from 'prop-types';

let CurrentSlide = 0;
let IntervalTime = 4000;
const BANNER_HEIGHT = 200;

export const Banners = ({navigation}) => {
  const scrollX = useRef();
  const imageAnimated = new Animated.Value(0);
  const [isLoading, setIsLoading] = useState(true);
  const BANNERS = useSelector((state) => state.banners.banners);
  const onImageLoad = () => {
    setIsLoading(false);
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
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
    <View style={styles.bannerWrapper}>
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
              <Animated.Image
                style={{...styles.banner, opacity: imageAnimated}}
                source={{
                  uri: item._data.img,
                }}
                onLoadEnd={onImageLoad}
              />
            </TouchableOpacity>

            {isLoading && (
              <View style={styles.placeHolder}>
                <ActivityIndicator size="small" color={Colors.primary} />
              </View>
            )}
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
  placeHolder: {
    height: '100%',
    width: WIDTH - 40,
    // backgroundColor: 'red',
    position: 'absolute',
    justifyContent: 'center',
  },
});

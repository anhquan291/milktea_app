import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {firstOpenActions} from '../../redux';
import {Slides, Pagination} from './components';
import slides from '../../db/IntroSlides';
import {WIDTH, HEIGHT} from '../../ultils/Constants';
import Colors from '../../themes/Colors';
import {MediumText} from '../../components/Text';

const IntroScreen = () => {
  const dispatch = useDispatch();
  const enterApp = () => {
    dispatch(firstOpenActions.firstOpenApp());
  };
  const scrollX = new Animated.Value(0);
  const scrollClick = useRef(null);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={enterApp} style={styles.skipContainer}>
        <MediumText style={styles.skipText}>Bỏ qua</MediumText>
      </TouchableOpacity>
      <Animated.ScrollView
        ref={scrollClick}
        scrollTo={{x: scrollClick, animated: true}}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        snapToInterval={WIDTH}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}, //
        )}>
        {slides.map((slide, index) => {
          return (
            <Slides
              nextHandler={() => {
                if (scrollClick.current) {
                  scrollClick.current.scrollTo({x: WIDTH * (index + 1)});
                }
              }}
              key={slide.id}
              enterApp={enterApp}
              last={index === slides.length - 1}
              index={index}
              imageUrl={slide.imageUrl}
              subtitle={slide.subtitle}
              des={slide.des}
            />
          );
        })}
      </Animated.ScrollView>
      <Pagination scrollX={scrollX} slides={slides} />
      <View style={styles.bottomBackground} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: HEIGHT * 0.15,
    backgroundColor: Colors.white,
  },
  skipContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 20 : HEIGHT > 736 ? 40 : 20,
    left: 20,
  },
  skipText: {
    fontSize: 18,
    color: Colors.grey,
  },
  bottomBackground: {
    height: 40,
    width: 110,
    backgroundColor: Colors.primary,
    position: 'absolute',
    right: 20,
    bottom: 30,
    borderRadius: 20,
    zIndex: -1,
  },
});

export default IntroScreen;

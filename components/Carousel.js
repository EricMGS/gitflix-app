import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

function Carousel(props) {
  return (
    <View>
      <Swiper
        autoplay={props.autoplay}
        height={props.height}
        dotColor='gray'
        activeDotColor='#DB202C'
      >
        {props.children}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  }
});

export default Carousel;
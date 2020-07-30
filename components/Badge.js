import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

function Badge(props) {
  function getWidth() {
    return (props.name.length + props.value.length) * 6;
  }

  return (
    <Image 
      source={{uri: `https://raster.shields.io/badge/${props.name}-${props.value}-${props.color}.png`}}
      style={{height: 20, width: getWidth(), marginHorizontal: 10, marginVertical: 3}}
      resizeMode='stretch'
    />
  );
}

export default Badge;
import React from 'react';
import Carousel from './Carousel';
import Slider from './Slider';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

function generateSliders(src, links, names) {
  const sliders = [];
  for(let i=0; i < src.length; i += 3) {
    sliders.push(
      <Slider 
        key={i} 
        imageSources={[src[i], src[i+1], src[i+2]]} 
        links={[links[i], links[i+1], links[i+2]]}
        names={[names[i], names[i+1], names[i+2]]}
      />
    );
  }

  return sliders;
}

function CarouselSlider(props) {
  return (
    <View style={{marginBottom: 15}}>
      <Text style={{color: 'white', paddingLeft: 15, fontSize: 20}}>{props.title}</Text>
      <Carousel autoplay={false} height={180}>
        {generateSliders(props.imageSources, props.links, props.names)}
      </Carousel>
    </View>
  );
}

export default CarouselSlider;
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

function Slider(props) {
  try {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={props.links[0]}>
          <ImageBackground 
            source={require('../assets/gitflix.png')} 
            style={{width: '100%', height: '100%'}}
            imageStyle={{width: '100%', height: '100%', resizeMode:'center'}}
            >
            <Image 
              source={{uri: props.imageSources[0]}} 
              style={{width: '100%', height: '100%', resizeMode:'stretch'}}
            />
          </ImageBackground>
          <Text style={{color: 'white', textAlign: 'center'}}>{props.names[0]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={props.links[1]}>
          <ImageBackground 
            source={require('../assets/gitflix.png')} 
            style={{width: '100%', height: '100%'}}
            imageStyle={{width: '100%', height: '100%', resizeMode:'center'}}
            >
            <Image 
              source={{uri: props.imageSources[1]}} 
              style={{width: '100%', height: '100%', resizeMode:'stretch'}}
            />
          </ImageBackground>
          <Text style={{color: 'white', textAlign: 'center'}}>{props.names[1]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={props.links[2]}>
          <ImageBackground 
            source={require('../assets/gitflix.png')} 
            style={{width: '100%', height: '100%'}}
            imageStyle={{width: '100%', height: '100%', resizeMode:'center'}}
            >
            <Image 
              source={{uri: props.imageSources[2]}} 
              style={{width: '100%', height: '100%', resizeMode:'stretch'}}
            />
          </ImageBackground>
          <Text style={{color: 'white', textAlign: 'center'}}>{props.names[2]}</Text>
        </TouchableOpacity>
      </View>
    );
  } catch(error) {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 100,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  image: {
    height: 130,
    width: 50,
  },
  item: {
    alignSelf: 'stretch',
    width: '33.333%',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Slider;
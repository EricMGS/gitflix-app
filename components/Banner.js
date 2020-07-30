import React from 'react';
import Badge from './Badge';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

function Banner(props) {
  try {
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <ImageBackground
          style={styles.image}
          imageStyle={{opacity: 0.5}}
          source={{uri: 'https://raw.githubusercontent.com/' + props.repo.full_name + '/master/image.png'}}
        >
          <Text style={styles.nome}>
            {props.repo.name}
          </Text>
          <Text style={styles.descricao}>
            {props.repo.description}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  } catch(error) {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignSelf: 'stretch',
  },
  image: {
    height: 200,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    color: 'white',
    fontSize: 30,
  },
  descricao: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 10,
  },
});

export default Banner;
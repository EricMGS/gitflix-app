import React from 'react';
import Logo from '../assets/gitflix.png';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

function Menu(props) {
  return(
    <View style={styles.menu}>
      <TouchableWithoutFeedback onPress={props.openDrawer}>
        <Image 
          source={require('../assets/menu2x.png')}
        />
      </TouchableWithoutFeedback>
      <Image
        style={styles.logo}
        source={require('../assets/gitflix.png')}
      />
      <TouchableWithoutFeedback>
        <Image
          source={require('../assets/search2x.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#DB202C',
    paddingHorizontal: 10,
  },
  logo: {
    width: 96,
    height: 40,
  }
});

export default Menu;
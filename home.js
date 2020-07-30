import Header from './components/Header';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Slider from './components/Slider';
import CarouselSlider from './components/CarouselSlider';
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      forked: [],
    };
    this.getRepos();
  }

  async getRepos() {
    const response = await fetch('https://api.github.com/users/ericmgs/repos');
    const data = await response.json();
    const repos = data.filter((repo) => (!repo.fork));
    const forked = data.filter((repo) => (repo.fork));
    await this.setState({repositories: repos});
    await this.setState({forked: forked});
  }

  getReadme(repo) {
    return 'https://raw.githubusercontent.com/' + repo.full_name + '/master/image.png';
  }

  openRepo(repo) {
    alert('Abrindo repositório ' + repo.name);
  }

  getImage(repo) {
    return 'https://raw.githubusercontent.com/' + repo.full_name + '/master/image.png';
  }

  render() {      
    return (
      <View style={styles.container}>
        {this.props.children}
        <ScrollView>
          <Carousel height={240}>
            {this.state.repositories.map(repo => (
              <Banner key={repo.id} repo={repo} onPress={() => this.openRepo(repo)}/>
            ))}
          </Carousel>

          <CarouselSlider 
            imageSources={this.state.repositories.map(repo => this.getImage(repo))}
            links={Array(5).fill(alert)}
            names={this.state.repositories.map(repo => repo.name)}
            title='Repositories'
          />

          <CarouselSlider 
            imageSources={this.state.forked.map(repo => this.getImage(repo))}
            links={Array(5).fill(alert)}
            names={this.state.forked.map(repo => repo.name)}
            title='Forks'
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
  }
});

export default Home;

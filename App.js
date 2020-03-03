import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LottieView from "lottie-react-native";

export default class App extends React.Component {

  componentDidMount() {
    this.animation.reset();
  }

  _check = () => {
    this.animation.play();
  }

  _unCheck = () => {
    this.animation.reset();
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.animationContainer}>
          <LottieView style={styles.lottie} ref={
            animation => {
              this.animation = animation;
            }
          }
            source={require("./16773-fire.json")} autoPlay controls loop />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._check}>
            <Text>체크하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._unCheck}>
            <Text>체크해제</Text>
          </TouchableOpacity>
          <Text>Open up App.js to start working on your app!</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",

  },
  lottie: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

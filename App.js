import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessTries, setGuessTries] = useState(0);

const newGameHandler = () => {
  setGuessTries(0);
  setUserNumber(null);
}

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessTries(0);
  };

  const gameOverHandler = numOfTries => {
    setGuessTries(numOfTries);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessTries <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (guessTries > 0) {
    content = <GameOverScreen roundsNumber={guessTries} userNumber={userNumber} onRestart={newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.summaryContainer}>
                <Text style={styles.line}>GAME OVER!</Text>
                <Text style={styles.line}>Number of rounds: {props.roundsNumber}</Text>
                <Text style={styles.line}>Number was: {props.userNumber}</Text>
                <Button color={Colors.primary}
                    title='Restart'
                    onPress={props.onRestart} />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    summaryContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250,
        maxHeight: '80%',
        maxWidth: '80%',
        padding: 15,
    },
    line: {
        color: 'black',
        fontSize: 15
    }
});

export default GameOverScreen;
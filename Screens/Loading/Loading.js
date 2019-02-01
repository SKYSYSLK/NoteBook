/* Loading Screen */

import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// imports for firebase
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class LoadingScreen extends React.Component {

    componentDidMount(): void {
        firebase.auth().onAuthStateChanged(user => {
           this.props.navigation.navigate(user ? 'Main' : 'SignUp')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading Screen</Text>
                <ActivityIndicator size='large' />
            </View>
        );
    }
}
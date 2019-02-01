/* Main Screen */

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

// imports for firebase
import firebase from 'react-native-firebase';

export default class MainScreen extends React.Component {

    state = {currentUser: null, errorMessage: null}

    handleLogOut = () => {
        firebase.auth().signOut()
            .then(() => this.props.navigation.navigate('Loading'))
            .catch(error => this.setState({errorMessage: error.message}))
    }

    componentDidMount(): void {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
    }

    render() {
        const {currentUser} = this.state

        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button title='Log Out' onPress={this.handleLogOut}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
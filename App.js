import React from 'react';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

// import the different screens
import LoadingScreen from './Screens/Loading/Loading';
import MainScreen from './Screens/Main/Main';
import LoginScreen from './Screens/Login/Login';
import SignUpScreen from './Screens/SignUp/SignUp';

const AppStack = createStackNavigator({
    Main: MainScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
});

const AppNavigator = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Loading',
    }
);

export default createAppContainer(AppNavigator);

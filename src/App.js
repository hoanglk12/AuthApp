import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';




class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBrHtLzrZdrDzYoMimibwaD08MWnRKopdU',
            authDomain: 'authapp-3df1e.firebaseapp.com',
            databaseURL: 'https://authapp-3df1e.firebaseio.com',
            projectId: 'authapp-3df1e',
            storageBucket: 'authapp-3df1e.appspot.com',
            messagingSenderId: '162460657512'
        });
    }
    render(){
        return(
            <View>
                <Header headerText="Authentication App"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;
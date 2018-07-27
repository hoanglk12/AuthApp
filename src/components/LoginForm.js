import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component{
    
    //initialize state with text = ''
    state = { email:'', password:'', error:'' };
    onPressButton(){
        //destructor
        const {email, password} = this.state;
        //method to authenticate user
        firebase.auth().signInWithEmailAndPassword(email, password)
        //catch error when user failed to login and create an account
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({error:'Authentication failed !'});
            });
        });
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    placeholder="user@gmail.com"
                    label="Email"
                    //define value = this.state.text and setState with onChangeText
                    value={this.state.email} 
                    onChangeText={email => this.setState({email})}
                     />
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    />
                </CardSection>
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
    }
}
export default LoginForm;
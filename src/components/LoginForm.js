import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component{
    //initialize state with text = ''
    state = { email:'', password:'' };
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
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
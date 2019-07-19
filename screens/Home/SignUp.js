
import React from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import { Button, Container, Content, Icon, Text, Header, Body, Input, Label, Item, Toast } from 'native-base';

export default class SignUp extends React.Component {

    constructor() {
        super();


        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.formData = this.formData.bind(this);
    }

    formData() {
        const { username, email, password } = this.state;
        if (username === '' || email === '' || password === '') {
            ToastAndroid.show('Wrong', ToastAndroid.SHORT)
        }
        else {
            this.props.navigation.navigate('Home')
        }
    }


    render() {
        return (
            <Container style={{ backgroundColor: '#603F83FF' }}>
                <Content>
                    <Body>
                        <Text style={{ color: '#C7D3D4FF', marginTop: 150, fontWeight: "bold", fontSize: 50 }}>Sign Up</Text>
                        <Item floatingLabel style={{ borderColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                            <Label style={{ color: '#C7D3D4FF' }}> Username</Label>

                            <Input onChangeText={e => this.setState({ username: e })} underlineColorAndroid='#C7D3D4FF' style={{ color: '#C7D3D4FF' }} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                            <Label style={{ color: '#C7D3D4FF' }}> Email</Label>

                            <Input textContentType='emailAddress' underlineColorAndroid='#C7D3D4FF' style={{ color: '#C7D3D4FF' }} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                            <Label style={{ color: '#C7D3D4FF' }}> Password</Label>
                            <Input underlineColorAndroid='#C7D3D4FF' secureTextEntry style={{ color: '#C7D3D4FF' }} />
                        </Item>
                        <Button block onPress={this.formData} style={{ backgroundColor: '#C7D3D4FF', marginLeft: 10, marginRight: 10, marginTop: 20 }} >
                            <Text style={{ color: '#603F83FF', fontWeight: "bold" }}>Sign Up</Text>
                            <Icon name='arrow-forward' style={{ color: '#603F83FF' }} />
                        </Button>
                    </Body>
                </Content>
            </Container>
        )
    }
}


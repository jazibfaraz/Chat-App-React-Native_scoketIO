
import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Button, Container, Content, Icon, Text, Header, Body, Input, Label, Item } from 'native-base';

export default class SignIn extends React.Component {

    constructor() {
        super();


    }


    render() {
        return (
            <Container style={{ backgroundColor: '#603F83FF' }}>
                <Content>
                    <Body>
                        <Text style={{ color: '#C7D3D4FF', marginTop: 150, fontWeight: "bold", fontSize: 50 }}>Sign In</Text>
                        <Item floatingLabel style={{ borderColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                            <Label style={{ color: '#C7D3D4FF' }}> Username</Label>

                            <Input underlineColorAndroid='#C7D3D4FF' style={{ color: '#C7D3D4FF' }} />
                        </Item>

                        <Item floatingLabel style={{ borderColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                            <Label style={{ color: '#C7D3D4FF' }}> Password</Label>
                            <Input underlineColorAndroid='#C7D3D4FF' secureTextEntry style={{ color: '#C7D3D4FF' }} />
                        </Item>
                        <Button block onPress={() => this.props.navigation.navigate('DrawerNavigator')} style={{ backgroundColor: '#C7D3D4FF', marginLeft: 10, marginRight: 10, marginTop: 20 }} >
                            <Text style={{ color: '#603F83FF', fontWeight: "bold" }}>Sign In</Text>
                            <Icon name='arrow-forward' style={{ color: '#603F83FF' }} />
                        </Button>
                        <Text style={{ color: '#C7D3D4FF', marginTop: 10 }}>don't have account ?</Text><Text style={{ color: '#C7D3D4FF' }} onPress={() => Linking.openURL(this.props.navigation.navigate('SignUp'))} >Create Account</Text>
                    </Body>
                </Content>
            </Container>
        )
    }
}


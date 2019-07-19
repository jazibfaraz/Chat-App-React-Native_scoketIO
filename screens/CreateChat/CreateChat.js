import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { Container, Content, Text, Header, Icon, ScrollableTab, Tabs, Tab } from 'native-base';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Chat from '../Chat/Chat';
import Online from '../Online/Online';
import Favourites from '../Favourites/Favourites';

export default class CreateChat extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props.navigation.getParam('userId'));

    }




    render() {
        return (

            <Container style={{ justifyContent: 'center', alignItems: 'center' }} >
                <Text>Create Chat</Text>

            </Container>
        )
    }
}




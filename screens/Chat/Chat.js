import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Button, Container, Content, Icon, Text, List, ListItem, Thumbnail, Textarea, Body, Header } from 'native-base';
import Favourites from '../Favourites/Favourites'

export default class Chat extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [
                {
                    userId: 'jf123',
                    name: 'Jazib Faraz',
                    msg: 'Hello'
                },
                {
                    userId: 'jf321',
                    name: 'Jazib Faraz',
                    msg: 'Hello'
                },
                {
                    userId: 'jf121',
                    name: 'Jazib Faraz',
                    msg: 'Hello'
                }
            ]
        }



        this.gotoFavourites = this.gotoFavourites.bind(this);
    }


    gotoFavourites() {
        console.log('Favourites');

    }

    render() {
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.data} renderRow={(chatData) =>

                        <ListItem button onPress={() => this.props.navigation.navigate('CreateChat', { userId: chatData.userId })} >
                            <Thumbnail source={require('../../jazib.jpg')} />

                            <Text>{chatData.name} </Text>
                            <Text note>{chatData.msg}</Text>


                        </ListItem>
                    } >

                    </List>
                </Content>

            </Container>
        )
    }
}
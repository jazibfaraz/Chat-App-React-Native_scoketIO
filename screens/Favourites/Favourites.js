import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Container, Content, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class Favourites extends React.Component {


    render() {
        return (
            <Container>
                <Text style={{ marginTop: 100 }}>Favourites</Text>

                <Button onPress={() => this.props.navigation.navigate('Chat')
                } ><Text>press</Text></Button>
            </Container>
        )
    }
}

export default withNavigation(Favourites)
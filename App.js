import React from 'react';
import { Image } from 'react-native'
import { createAppContainer, createDrawerNavigator, createStackNavigator, DrawerItems, createMaterialTopTabNavigator } from 'react-navigation';
import SignIn from './screens/Home/SignIn';
import SignUp from './screens/Home/SignUp';
import CreateChat from './screens/CreateChat/CreateChat';
import Chat from './screens/Chat/Chat';
import Favourites from './screens/Favourites/Favourites';
import Online from './screens/Online/Online';
import { Footer, Button, Container, Content, Icon, Text, Header, Body } from 'native-base';
import { hide } from 'expo/build/launch/SplashScreen';

const customeDrawer = (props) => (

  <Container>
    <Header style={{ height: 200, backgroundColor: '#603F83FF' }}>
      <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ height: 70, width: 70, borderRadius: 35 }} source={require('./jazib.jpg')} />
        <Text style={{ color: '#FFF', textAlign: 'left', fontSize: 30 }} >Jazib Faraz </Text>
        <Text style={{ color: '#C7D3D4FF', textAlign: 'center', fontSize: 15 }} >Student </Text>
      </Body>
    </Header>

    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)



const topTabNavigator = createMaterialTopTabNavigator({
  Chat: { screen: Chat },
  Online: { screen: Online },
  Favourites: { screen: Favourites }
},
  {
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      style: {
        backgroundColor: '#603F83FF',
      },
      indicatorStyle: {
        backgroundColor: '#fff',
      }
    },


  }
)


const drawerNavigator = createDrawerNavigator({
  Home: topTabNavigator,
  SignUp: { screen: SignUp }
},
  {
    initialRouteName: 'Home',
    contentComponent: customeDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: '#603F83FF',
    }
  }
)


const stackNavigator = createStackNavigator({
  Home: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }

  },
  CreateChat: { screen: CreateChat },
  SignUp: { screen: SignUp },
  DrawerNavigator: { screen: drawerNavigator },
},
  {
    headerMode: 'none'
  }
)



export default Navigator = createAppContainer(stackNavigator);

import 'react-native-gesture-handler';

import login from "./src/screens/login";
import home from "./src/screens/home";
import cliente from "./src/screens/cliente";


import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export const Routers = () => {
    return (
        <NavigationContainer>
            <StackNavigate/>
        </NavigationContainer>
    );
}

export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="home"
            component={DrawerNavigate}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    );
}

export const DrawerNavigate = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='home'
            component={home}
            options={{
                drawerActiveTintColor: 'orange',
                drawerInactiveTintColor: '#eee',
                drawerActiveBackgroundColor: 'black',
                drawerStyle: {
                   backgroundColor: '#CDB81C'},
                drawerIcon: ({color}) => <AntDesign name="home" size={24} color={color} />,
                drawerActiveTintColor: 'orange',
                drawerInactiveTintColor: '#eee'
            }} />
            <Drawer.Screen name='cliente' component={cliente}
            options={{
                drawerActiveTintColor: 'orange',
                drawerInactiveTintColor: '#eee',
                drawerActiveBackgroundColor: 'black',
                drawerStyle: {
                    backgroundColor: '#CDB81C'},
                    drawerIcon: ({color}) => <Feather name="box" size={24} color={color} />,
                    drawerActiveTintColor: 'orange',
                    drawerInactiveTintColor: '#eee'
            }}
            />
            
        </Drawer.Navigator>
    );
}
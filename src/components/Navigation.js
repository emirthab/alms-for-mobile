import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/dist/FontAwesome"

import { Text, View } from "react-native"

import Header from "./Header"

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Header />
            <Tab.Navigator                
                screenOptions={screenOptions}>

                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="User" component={SettingsScreen} />
                <Tab.Screen name="set" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
            case "Home":
                iconName = "home";
                break;
            case "Settings":
                iconName = "user";
                break;
            case "User":
                iconName = "user";
        }
        return <Icon name={iconName} size={size} color={color} />;
    },
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "500"
    },
    tabBarActiveTintColor: '#fab614',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
    tabBarStyle: { height: 55, bottom: 5 }
})
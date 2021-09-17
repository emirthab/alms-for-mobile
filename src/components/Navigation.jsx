import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/dist/FontAwesome"
import { BottomNavigation, BottomNavigationTab, Layout } from '@ui-kitten/components';

import { Text, View, ImageBackground, StyleSheet } from "react-native"

import Header from "./Header"

import Home from "./screens/Home"
import Lesson from "./screens/Lessons"

const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>

        <BottomNavigationTab title="Ana Sayfa"
            icon={
                <Icon color={state.index === 0 ? "#fab614" : "#888888"}
                    size={25}
                    name="home" />} />

        <BottomNavigationTab title="Derslerim"
            icon={
                <Icon color={state.index === 1 ? "#fab614" : "#888888"}
                    size={25}
                    name="book" />} />

        <BottomNavigationTab title="Mesajlar"
            icon={
                <Icon color={state.index === 2 ? "#fab614" : "#888888"}
                    size={25}
                    name="envelope" />} />

        <BottomNavigationTab title="Profil"
            icon={
                <Icon color={state.index === 3 ? "#fab614" : "#888888"}
                    size={25}
                    name="user" />} />
    </BottomNavigation>
);
export default function App() {
    return (
        <NavigationContainer>
            <Header />
            <Tab.Navigator
                sceneContainerStyle={{ backgroundColor: "transparent" }}
                tabBar={props => <BottomTabBar {...props} />}
                screenOptions={{headerShown: false }}>
                <Tab.Screen name="Ana Sayfa" component={Home} />
                <Tab.Screen name="Derslerim" component={Lesson} />
                <Tab.Screen name="Profil" component={Home} />
                <Tab.Screen name="set" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

import Inbox from "./Inbox"

const { Navigator, Screen } = createMaterialTopTabNavigator();

export default function Home() {
    return (
        <Navigator tabBar={props => <TopTabBar {...props} />}            
            sceneContainerStyle={{ backgroundColor: "transparent" }}>

            <Screen name='Gelen' component={Inbox} />
            <Screen name='Giden' component={Inbox} />
            <Screen name='Taslak' component={Inbox} />
            <Screen name='Çöp' component={Inbox} />
        </Navigator>
    )
}

const TopTabBar = ({ navigation, state }) => (
    <TabBar        
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Gelen' />
        <Tab title='Giden' />
        <Tab title='Taslak' />
        <Tab title='Çöp' />
    </TabBar>
);
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

import General from "./General"
import Calendar from './Calendar';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export default function Home() {
    return (
        <Navigator tabBar={props => <TopTabBar {...props} />}            
            sceneContainerStyle={{ backgroundColor: "#efefef" }}>

            <Screen name='Genel' component={General} />
            <Screen name='Takvim' component={Calendar} />
        </Navigator>
    )
}

const TopTabBar = ({ navigation, state }) => (
    <TabBar        
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Genel' />
        <Tab title='Takvim' />                
    </TabBar>
);
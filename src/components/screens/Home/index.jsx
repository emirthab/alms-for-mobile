import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

import Activities from "./Activities"
import Announcements from "./Announcements"

const { Navigator, Screen } = createMaterialTopTabNavigator();

export default function Home() {
    return (
        <Navigator tabBar={props => <TopTabBar {...props} />}            
            sceneContainerStyle={{ backgroundColor: "transparent" }}>

            <Screen name='Aktiviteler' component={Activities} />
            <Screen name='Duyurular' component={Announcements} />
        </Navigator>
    )
}

const TopTabBar = ({ navigation, state }) => (
    <TabBar        
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Aktivitelerim' />
        <Tab title='Duyurular' />
                
    </TabBar>
);
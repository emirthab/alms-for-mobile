import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

import MyLessons from "./MyLessons"

const { Navigator, Screen } = createMaterialTopTabNavigator();

export default function Home() {
    return (
        <Navigator tabBar={props => <TopTabBar {...props} />}            
            sceneContainerStyle={{ backgroundColor: "transparent" }}>

            <Screen name='Derslerim' component={MyLessons} />
            <Screen name='Not Çizelgem' component={MyLessons} />
        </Navigator>
    )
}

const TopTabBar = ({ navigation, state }) => (
    <TabBar        
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title='Derslerim' />
        <Tab title='Not Çizelgem' />
                
    </TabBar>
);
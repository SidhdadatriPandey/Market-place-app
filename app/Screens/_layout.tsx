import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const _layout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="HomeScreen"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="ExploreScreen"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
        // <Stack screenOptions={{ headerShown: false }}>
        //     <Stack.Screen name='AddPostScreen' />
        //     <Stack.Screen name='ExploreScreen' />
        //     <Stack.Screen name='HomeScreen' />
        //     <Stack.Screen name='LoginScreen' />
        //     <Stack.Screen name='ProfileScreen' />
        // </Stack>
    )
}

export default _layout
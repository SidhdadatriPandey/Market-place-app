import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
// import { ClerkProvider } from '@clerk/nextjs'
// import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'

const index = () => {
    return (
        <Redirect href={'/LoginScreen'} />
    )
}
export default index
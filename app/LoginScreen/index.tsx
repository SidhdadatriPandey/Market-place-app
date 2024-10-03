import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Redirect, router } from 'expo-router';

export default function LoginPage() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                backgroundColor: '#f8f9fa',
            }}
        >
            <View
                style={{
                    marginBottom: 20,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={require('@/assets/images/logo1.png')}
                    style={{
                        height: 300,
                        width: 300,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: 'black',
                        resizeMode: 'contain',
                        backgroundColor: '#C0C0C0',
                    }}
                />
            </View>
            <View
                style={{
                    alignItems: 'center',
                    marginBottom: 30,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: 10,
                    }}
                >
                    COMMUNITY MARKETPLACE
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: 'black',
                        textAlign: 'center',
                        paddingHorizontal: 20,
                    }}
                >
                    Buy and sell items easily on our marketplace. Sell old items and make
                    real money!
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#007bff',
                    paddingVertical: 15,
                    paddingHorizontal: 40,
                    borderRadius: 8,
                }}
                onPress={() => router.push('/(tabs)')}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: '#fff',
                        fontWeight: '600',
                    }}
                >
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    );
}

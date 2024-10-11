import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import Categories from './HomeComponents/Categories';

const PostItem = ({ item }: any) => {
    // console.log('item', item.image);
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#ddd',
                margin: 8,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 3
            }}
        // onPress={() => router.push({
        //     pathname: '/ProductDetailScreen',
        //     params: {
        //         address: item.address,
        //         Category: item.category,
        //         desc: item.desc,
        //         // image: item.image,
        //         image: encodeURIComponent(item.image),
        //         price: item.price,
        //         title: item.title
        //     }
        // })}
        >
            <Image
                source={{ uri: item?.image }}
                style={{
                    height: 160,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    width: '100%',
                    resizeMode: 'cover'
                }}
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#333' }}>{item?.title}</Text>
                <Text style={{ fontSize: 14, color: '#777', marginVertical: 4 }}>$ {item.price}</Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: '#fff',
                        backgroundColor: '#6a5acd',
                        paddingHorizontal: 6,
                        paddingVertical: 4,
                        borderRadius: 4,
                        alignSelf: 'flex-start'
                    }}
                >
                    {item.category}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default PostItem
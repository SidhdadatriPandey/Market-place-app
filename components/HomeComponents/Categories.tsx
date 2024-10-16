import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { router } from 'expo-router';

const Categories = ({ categoryList }: any) => {
    // console.log(categoryList);
    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Categories</Text>
            <FlatList
                data={categoryList}
                numColumns={4}
                renderItem={({ item, index }: any) => {
                    if (index <= 6) {
                        return (
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    margin: 5,
                                    borderRadius: 10,
                                    // padding: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: wp(21),
                                    backgroundColor: '#e6ecff'
                                }}
                                onPress={() => router.push({
                                    pathname: '/ItemListScreen',
                                    params: {
                                        category: item.name
                                    }
                                })}

                            >
                                <Image
                                    source={{ uri: item.icon }}
                                    style={{
                                        width: wp(20),
                                        height: 50,
                                        borderRadius: 8,
                                        resizeMode: 'contain',
                                    }}
                                />
                                <Text style={{ marginTop: 5, textAlign: 'center' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    } else {

                        return <Text>Test</Text>
                    }
                }}

                keyExtractor={({ item, index }) => index}
            />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
                marginVertical: 10,
                color: '#333'
            }}>
                Latest Items
            </Text>

        </View>
    )
}

export default Categories
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';

const LatestItemList = ({ sliderList, categoryList, latestItemList }: any) => {
    console.log(latestItemList);
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#f5f5f5', paddingTop: 45 }}>

            <FlatList
                contentContainerStyle={{ paddingBottom: 14 }}
                data={latestItemList}
                numColumns={2}
                renderItem={({ item, index }: any) => (
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
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                height: 160,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                width: '100%',
                                resizeMode: 'cover'
                            }}
                            key={index}
                        />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#333' }}>{item.title}</Text>
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
                )}
                ListHeaderComponent={() => (
                    <View>
                        <Header />
                        <Slider sliderList={sliderList} />
                        <Categories categoryList={categoryList} />
                    </View>
                )}
            />
        </View>
    );

}

export default LatestItemList
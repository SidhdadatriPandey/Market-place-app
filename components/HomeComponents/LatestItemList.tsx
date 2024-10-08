import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import PostItem from '../PostItem';

const LatestItemList = ({ sliderList, categoryList, latestItemList }: any) => {
    // console.log(latestItemList);
    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#f5f5f5', paddingTop: 45 }}>

            {
                latestItemList.length > 0 ? <FlatList
                    contentContainerStyle={{ paddingBottom: 14 }}
                    data={latestItemList}
                    numColumns={2}
                    renderItem={({ item, index }: any) => (
                        <PostItem item={item} key={index} />
                    )}
                    ListHeaderComponent={() => (
                        <View>
                            <Header />
                            <Slider sliderList={sliderList} />
                            <Categories categoryList={categoryList} />
                        </View>
                    )}
                /> : <ActivityIndicator color="#0000ff" style={{ flex: 1, }} size='large' />
            }
        </View>
    );

}

export default LatestItemList
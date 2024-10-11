import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PostItem from './PostItem'
import { ActivityIndicator } from 'react-native'

const CategoryItemList = ({ latestItemList }: any) => {
    // console.log('latestitemlist2222', latestItemList);
    return (
        <View style={{ padding: 10, backgroundColor: '#f5f5f5', paddingTop: 45 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'blue', margin: 'auto', textAlign: 'center' }}>{latestItemList[0]?.category}</Text>
            <FlatList
                contentContainerStyle={{ paddingBottom: 14 }}
                data={latestItemList}
                numColumns={2}
                renderItem={({ item, index }: any) => (
                    <PostItem item={item} key={index} />
                )}
            // ListHeaderComponent={() => (
            //     <View>
            //         <Header />
            //         <Slider sliderList={sliderList} />
            //         <Categories categoryList={categoryList} />
            //     </View>
            // )}
            />
        </View>
    )
}

export default CategoryItemList
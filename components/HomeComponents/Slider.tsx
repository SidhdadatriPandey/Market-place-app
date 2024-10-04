import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const Slider = ({ sliderList }: any) => {
    console.log("slider list");
    // console.log(sliderList);
    return (

        <View>
            <Text>Slider</Text>

            <FlatList
                data={sliderList}
                renderItem={({ item, index }) => <Image source={{ uri: item?.image.data }}
                    style={{ height: 200, width: 200, borderWidth: 2, borderColor: 'blue' }}
                />}
            />
        </View>
    )
}

export default Slider
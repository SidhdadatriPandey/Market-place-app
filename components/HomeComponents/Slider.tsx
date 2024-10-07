// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import { FlatList } from 'react-native'

// const Slider = ({ sliderList }: any) => {
//     console.log("slider list");
//     // console.log(sliderList);
//     return (
//         <View>
//             <Text>Slider</Text>
//             <FlatList
//                 data={sliderList}
//                 renderItem={({ item, index }) => <Image source={{ uri: item?.image.data }}
//                     style={{ height: 200, width: 200, borderWidth: 2, borderColor: 'blue' }}
//                 />}
//                 keyExtractor={(item, index) => index.toString()}
//             />
//         </View>
//     )
// }

// export default Slider

import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import Header from './Header';
import Categories from './Categories';
import LatestItemList from './LatestItemList';

const Slider = ({ sliderList }: any) => {
    // console.log('sliderList', sliderList[0]);
    return (
        <View>
            {/* <Text>Slider</Text> */}
            <FlatList
                data={sliderList}
                contentContainerStyle={{ marginVertical: 15 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    const imageUrl = item?.image;
                    return imageUrl ? (
                        <Image
                            source={{ uri: imageUrl }}
                            style={{ height: 200, width: 330, borderWidth: 2, borderColor: 'blue', margin: 5 }}
                        />
                    ) : (
                        <Text>No Image Available</Text>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}

            />
        </View>
    );
};

export default Slider;

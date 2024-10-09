import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router'
import { Image } from 'react-native';

const ProductDetail = () => {
    // const params = useLocalSearchParams();
    // console.log('params', typeof params.image);
    // const { title } = params.product;
    // console.log('data', title);
    const { address, Category, desc, image, price, title } = useGlobalSearchParams();
    const s1 = "https://firebasestorage.googleapis.com/v0/b/marketplace-c75c0.appspot.com/o/communityPost%2F1728287867534.jpg?alt=media&token=979c94e4-db22-4f69-b6c3-d1e63bf50de0";
    const s2 = "https://firebasestorage.googleapis.com/v0/b/marketplace-c75c0.appspot.com/o/communityPost%1F1728287867534.jpg?alt=media&token=979c94e4-db22-4f69-b6c3-d1e63bf50de0";
    // const s = s1.eq
    // const decodedImageUrl = decodeURIComponent(image);
    // const decodedImageUrl = Array.isArray(image) ? decodeURIComponent(image[0]) : decodeURIComponent(image);
    let decodedImageUrl = '';

    if (Array.isArray(image)) {
        // If it's an array, take the first element
        decodedImageUrl = decodeURIComponent(image[0]);
    } else if (typeof image === 'string') {
        // If it's a string, decode it
        decodedImageUrl = decodeURIComponent(image);
    }
    console.log('params', decodedImageUrl);
    return (
        <View>
            <Image
                // source={
                //     typeof params?.image === 'string'
                //         ? { uri: params.image }
                //         : { uri: Array.isArray(params?.image) && params.image.length > 0 ? params.image[0] : '' }
                // }
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/marketplace-c75c0.appspot.com/o/communityPost/1728030630570.jpg?alt=media&token=bfd4c3b7-7175-4b94-8720-7cb8389a00b5' }}
                style={{
                    width: 200,
                    height: 200,
                    //  backgroundColor: 'yellow' 
                }}
            />
            <View>
                {/* <Text>{params?.title}</Text>
                <Text>{params?.category}</Text>
                <Text>{params?.desc}</Text>
                <Text>{params?.price}</Text> */}
            </View>
        </View>
    )
}

export default ProductDetail
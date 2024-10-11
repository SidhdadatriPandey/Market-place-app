import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { image } from '@/assets/images';
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
// import MyProfle from '@assets/images/MyProfile.png';
// import MyProfileImage from '@assets/images/MyProfile.png';

const ProfileScreen = () => {
    const menuList = [
        {
            id: 1,
            name: "My Profile",
            icon: image.MyProfile,
        },
        {
            id: 2,
            name: "Explore",
            icon: image.Explore,
        },
        {
            id: 3,
            name: "User",
            icon: image.User,
        }
    ]
    return (
        <View style={{ padding: 5, marginTop: 35, }}>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    flexDirection: 'column',
                    // gap: hp(1.5), 
                    // marginBottom: hp(1), 
                    // width: 250
                }}>

                    <View style={{ alignItems: 'center', }}>
                        <View style={{ height: hp(8), width: hp(8), borderRadius: wp(100), backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(4), fontWeight: 'bold', }}>U</Text>
                        </View>
                        <Text style={{ fontSize: hp(2.5) }}>Welcome</Text>
                        <Text style={{ fontSize: hp(3), fontWeight: 'bold', }}>Game Play</Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#e6ecff',
                    padding: hp(1),
                    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'blue', borderRadius: wp(50)
                }}>
                    <EvilIcons name="search" size={hp(3)} color="black" style={{ paddingLeft: hp(1) }} />
                    <TextInput placeholder='search' style={{ fontSize: hp(3), flex: 1, marginLeft: 1 }} />
                </View>
            </View>
            <FlatList
                data={menuList}
                contentContainerStyle={{
                    width: '100%',
                    justifyContent: 'space-between', // Distribute space evenly between items
                    // flexDirection: 'row', // Make sure items are arranged in a row
                    paddingVertical: wp(6), // Padding between edges and items
                }}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.id} style={{
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        padding: 10,
                        width: wp(30)
                    }}
                    >

                        <Image source={item.icon}
                            style={{ width: wp(20), height: hp(10), resizeMode: 'stretch' }}
                        />
                        <Text style={{ marginTop: 5, fontSize: hp(2) }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProfileScreen
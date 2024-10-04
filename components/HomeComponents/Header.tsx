import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from '@expo/vector-icons/EvilIcons';


const Header = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', gap: hp(1.5), marginBottom: hp(1) }}>
                <View style={{ height: hp(8), width: hp(8), borderRadius: wp(100), backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: hp(4), fontWeight: 'bold', }}>U</Text>
                </View>
                <View>
                    <Text style={{ fontSize: hp(2.5) }}>Welcome</Text>
                    <Text style={{ fontSize: hp(3), fontWeight: 'bold', }}>Game Play</Text>
                </View>
            </View>
            <View style={{ padding: hp(1), flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'blue', borderRadius: wp(50) }}>
                <EvilIcons name="search" size={hp(3)} color="black" style={{ paddingLeft: hp(1) }} />
                <TextInput placeholder='search' style={{ fontSize: hp(3), flex: 1, marginLeft: 1 }} />
            </View>
        </View>
    )
}

export default Header
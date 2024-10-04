import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/HomeComponents/Header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Slider from '@/components/HomeComponents/Slider';
import { getFirestore } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


const HomeScreen = () => {
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState<any>([]);
    useEffect(() => {
        getSlider();
    }, [])

    const getSlider = async () => {
        setSliderList([]);
        const querySnapshot = await getDocs(collection(db, "Sliders"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setSliderList((prevData: any) => [...prevData, doc.data])
        });
        // console.log('slider list', sliderList)
    }


    return (
        <View style={{ marginTop: hp(5), marginHorizontal: hp(1) }}>
            <Header />
            <Slider sliderList={sliderList} />
        </View>
    )
}

export default HomeScreen
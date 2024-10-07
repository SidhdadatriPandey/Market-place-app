import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/HomeComponents/Header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Slider from '@/components/HomeComponents/Slider';
import { getFirestore } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Categories from '@/components/HomeComponents/Categories';
import LatestItemList from '@/components/HomeComponents/LatestItemList';
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';


const HomeScreen = () => {
    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState<any>([]);
    const [categoryList, setCategoryList] = useState<any>([]);
    const [latestItemList, setLatestItemList] = useState<any>([]);
    useEffect(() => {
        getSlider();
        getCategoryList();
        getLatestItemList()
    }, [])

    const getSlider = async () => {
        setSliderList([]);
        const querySnapshot = await getDocs(collection(db, "Sliders"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            setSliderList((prevData: any) => [...prevData, doc.data()])
        });
        // console.log('slider list', sliderList)
    }
    const getCategoryList = async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db, 'Category'));
        querySnapshot.forEach((doc: any) => {
            // console.log("Docs:", doc.data());
            setCategoryList((categoryList: any) => [...categoryList, doc.data()]);
        })
    }

    const getLatestItemList = async () => {
        setLatestItemList([]);
        const querySnapshot = await getDocs(collection(db, 'userPost'));
        querySnapshot.forEach((doc: any) => {
            // console.log("Docs:", doc.data());
            setLatestItemList((latestItemList: any) => [...latestItemList, doc.data()]);
        })
    }

    return (
        // <ScrollView
        //     style={{ flex: 1, marginTop: hp(5), marginHorizontal: hp(1) }}
        // >
        //     <View>
        //         <Header />
        //         <Slider sliderList={sliderList} />
        //         <Categories categoryList={categoryList} />
        //         <LatestItemList latestItemList={latestItemList} />
        //     </View>
        // </ScrollView>
        <LatestItemList sliderList={sliderList} categoryList={categoryList} latestItemList={latestItemList} />
    )
}

export default HomeScreen
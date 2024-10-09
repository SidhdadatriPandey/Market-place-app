import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'
import { app } from '../firebaseConfig'
import Categories from '@/components/HomeComponents/Categories'
import CategoryItemList from '@/components/CategoryItemList'

const ExploreScreen = () => {
    const [productList, setProductList] = useState<any>([]);
    useEffect(() => {
        getAllProducts()
    }, [])
    const db = getFirestore(app)
    const getAllProducts = async () => {
        setProductList([]);
        const q = query(collection(db, "userPost"))
        const snapShot = await getDocs(q);
        snapShot.forEach((doc: any) =>
            // console.log('doc data', doc.data()
            setProductList((prev: any) => [...prev, doc.data()])
        )
    }
    return (
        <View>
            <CategoryItemList latestItemList={productList} />
        </View>
    )
}

export default ExploreScreen
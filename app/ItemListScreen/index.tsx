// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'
// import { useLocalSearchParams } from 'expo-router'
// import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import { app } from '../firebaseConfig';

// const ItemList = () => {
//     const params = useLocalSearchParams();
//     // console.log(data);
//     const db = getFirestore(app);
//     useEffect(() => {
//         params && getItemListByCategory();
//     }, [params])

//     const getItemListByCategory = async () => {
//         const q = query(collection(db, 'UserPost'), where('category', '==', params.category));
//         const snapshot = await getDocs(q);
//         snapshot.forEach((doc: any) => (
//             console.log('docs', doc.data())
//         ))
//     }
//     return (
//         <View>
//             <Text>ItemList</Text>
//         </View>
//     )
// }

// export default ItemList

import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import CategoryItemList from '@/components/CategoryItemList';
// import LatestItemList from '@/components/HomeComponents/LatestItemList';

const ItemList = () => {
    const params = useLocalSearchParams();
    const db = getFirestore(app);
    const [items, setItems] = useState<any[]>([]); // State to store the list of items

    useEffect(() => {
        if (params.category) { // Check if params.category is defined
            getItemListByCategory();
        }
    }, [params.category]);

    const getItemListByCategory = async () => {
        try {
            const q = query(collection(db, 'userPost'), where('category', '==', params.category));
            const snapshot = await getDocs(q);
            // console.log('category1', typeof (snapshot))
            console.log('category1', snapshot)
            setItems([]);
            // const itemList: any[] = [];
            snapshot.forEach((doc: any) => {
                // itemList.push(doc.data()); // Push the data to the itemList array
                setItems((prevData: any) => [...prevData, doc.data()])
                console.log('category', doc.data())
            });
            // setItems(itemList); // Update the state with the fetched items
        } catch (error) {
            console.error('Error fetching item list by category: ', error);
        }
    };
    // console.log('itemList', items)
    return (
        <View>
            {/* <Text>ItemList</Text> */}
            {/* {items.map((item, index) => (
                <Text key={index}>{JSON.stringify(item)}</Text> // Display each item
            ))} */}
            {/* <ItemList latestItemList={items} /> */}
            {
                items.length > 0 ? <CategoryItemList latestItemList={items} /> :
                    <Text style={{ marginTop: 100, fontSize: 30, fontWeight: 'bold', color: 'blue', margin: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>No data found</Text>
            }
            {/* <CategoryItemList latestItemList={items} /> */}
        </View>
    );
};

export default ItemList;

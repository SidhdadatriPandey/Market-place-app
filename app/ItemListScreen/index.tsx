import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import CategoryItemList from '@/components/CategoryItemList';

const ItemList = () => {
    const params = useLocalSearchParams();
    const db = getFirestore(app);
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.category) {
            getItemListByCategory();
        }
    }, [params.category]);

    const getItemListByCategory = async () => {
        try {
            setLoading(true);
            const q = query(collection(db, 'userPost'), where('category', '==', params.category));
            const snapshot = await getDocs(q);
            // console.log('category1', typeof (snapshot))
            // console.log('category1', snapshot)
            setItems([]);
            // const itemList: any[] = [];
            snapshot.forEach((doc: any) => {
                setItems((prevData: any) => [...prevData, doc.data()])
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching item list by category: ', error);
        }
    };
    if (loading) return <ActivityIndicator size="large" color="#00ff00" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    return (
        <View>
            {
                items.length > 0 ? <CategoryItemList latestItemList={items} /> :
                    <Text style={{ marginTop: 100, fontSize: 30, fontWeight: 'bold', color: 'blue', margin: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>No data found</Text>
            }
        </View>
    );
};

export default ItemList;

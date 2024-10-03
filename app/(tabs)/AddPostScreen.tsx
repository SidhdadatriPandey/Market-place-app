import { View, Text, TextInput, Button, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from '../firebaseConfig';
import { Formik } from 'formik';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
// import { app } from '../FirebaseConfig';
// import { app } from '../FirebaseConfig';

const AddPostScreen = () => {
    const [categoryList, setCategoryList] = useState<any[]>([])
    const db = getFirestore(app);
    const { height, width } = Dimensions.get('window')

    useEffect(() => {
        getCategoryList();
    }, [])

    const getCategoryList = async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db, 'Category'));
        querySnapshot.forEach((doc: any) => {
            console.log("Docs:", doc.data());
            setCategoryList(categoryList => [...categoryList, doc.data()])
        })
    }
    return (
        <Formik initialValues={{ title: '', desc: '', category: '', address: '', price: '', image: '' }}
            onSubmit={value => console.log(value)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>Add new post</Text>
                    <Text style={{ fontSize: hp(2) }}>Create new post and start selling</Text>
                    <TouchableOpacity style={{ margin: hp(1), padding: hp(1), borderRadius: hp(1), alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: hp(15), width: hp(20), borderRadius: 10 }}
                            source={require('@/assets/images/imagePlaceholder2.png')}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                        placeholder='Title'
                        value={values.title}
                        onChangeText={handleChange('title')}
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                        placeholder='Description'
                        value={values.desc}
                        numberOfLines={5}
                        textAlignVertical='top'
                        onChangeText={handleChange('desc')}
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                        placeholder='Price'
                        value={values.price}
                        keyboardType='number-pad'
                        onChangeText={handleChange('price')}
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                        placeholder='Address'
                        value={values.address}
                        onChangeText={handleChange('address')}
                    />
                    <Picker
                        selectedValue={values.category}
                        style={{ height: 50, width: hp(30) }}
                        onValueChange={handleChange('category')}>
                        {
                            categoryList && categoryList.map((category: any, index: number) => {
                                return (<Picker.Item label={category.name} value={category.name} />)
                            })
                        }

                    </Picker>
                    <TouchableOpacity onPress={handleSubmit} style={{ margin: hp(1), backgroundColor: 'yellow', padding: hp(1) }}>
                        <Text style={{ fontSize: 17, color: 'blue' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik >
    )
}

export default AddPostScreen
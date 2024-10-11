// import { View, Text, TextInput, Button, TouchableOpacity, Dimensions, Image, ToastAndroid, Alert, ActivityIndicator, KeyboardAvoidingView, ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
// import { app } from '../firebaseConfig';
// import { Formik } from 'formik';
// import * as FileSystem from 'expo-file-system';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Picker } from '@react-native-picker/picker';
// import * as ImagePicker from 'expo-image-picker';
// import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// const AddPostScreen = () => {
//     const [categoryList, setCategoryList] = useState<any[]>([])
//     const [loading, setLoading] = useState<boolean>(false)
//     const [image, setImage] = useState<any>();
//     const db = getFirestore(app);
//     const { height, width } = Dimensions.get('window')
//     const storage = getStorage();

//     useEffect(() => {
//         getCategoryList();
//     }, [])

//     const getCategoryList = async () => {
//         setCategoryList([]);
//         const querySnapshot = await getDocs(collection(db, 'Category'));
//         querySnapshot.forEach((doc: any) => {
//             // console.log("Docs:", doc.data());
//             setCategoryList(categoryList => [...categoryList, doc.data()]);
//         })
//     }

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 4],
//             quality: 1,
//         });

//         if (!result.canceled) {
//             setImage(result.assets[0]?.uri);
//         }
//     };
//     const onSubmitMethod = async (value: any) => {
//         setLoading(true);
//         const resp = await fetch(image);
//         const blob = await resp.blob();
//         const storageRef = ref(storage, 'communityPost/' + Date.now() + '.jpg')

//         uploadBytes(storageRef, blob).then((snapshot: any) => {
//             console.log('uploaded a blob or file');
//         }).then((resp: any) => {
//             getDownloadURL(storageRef).then(async (downloadUrl: any) => {
//                 // console.log(downloadUrl);
//                 value.image = downloadUrl;
//                 const docRef = await addDoc(collection(db, "userPost"), value);
//                 if (docRef.id) {
//                     setLoading(false);
//                     // console.log('Document added successfully');
//                     Alert.alert("success!!!, post added successfully.")
//                 }
//             })
//         })

//     };
//     return (
//         <KeyboardAvoidingView
//             style={{
//                 marginTop: 100,
//                 flex: 1,
//             }}
//         >
//             <ScrollView>
//                 <Formik initialValues={{ title: '', desc: '', category: '', address: '', price: '', image: '', createdAt: Date.now() }}
//                     onSubmit={value => onSubmitMethod(value)}
//                     validate={(value) => {
//                         const errors = {}
//                         if (!value.title) {
//                             ToastAndroid.show('title must be there', ToastAndroid.SHORT);
//                             errors.name = 'Title'
//                         }
//                         return errors;
//                     }}
//                 >
//                     {({ handleChange, handleBlur, handleSubmit, values, errors }: any) => (
//                         <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
//                             <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>Add new post</Text>
//                             <Text style={{ fontSize: hp(2) }}>Create new post and start selling</Text>
//                             <TouchableOpacity
//                                 onPress={pickImage}
//                                 style={{ margin: hp(1), backgroundColor: '#b3e6ff', padding: 5, borderRadius: hp(1), alignItems: 'center', justifyContent: 'center', }}>
//                                 {
//                                     image ? <Image source={{ uri: image }} style={{ width: hp(15), height: hp(10) }} /> : <Image
//                                         style={{ height: hp(10), width: hp(15), margin: 0, }}
//                                         source={require('@/assets/images/imagePlaceholder2.png')}
//                                         resizeMode='stretch'
//                                     />
//                                 }

//                             </TouchableOpacity>
//                             <TextInput
//                                 style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
//                                 placeholder='Title'
//                                 value={values.title}
//                                 onChangeText={handleChange('title')}
//                             />
//                             <TextInput
//                                 style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
//                                 placeholder='Description'
//                                 value={values.desc}
//                                 numberOfLines={5}
//                                 textAlignVertical='top'
//                                 onChangeText={handleChange('desc')}
//                             />
//                             <TextInput
//                                 style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
//                                 placeholder='Price'
//                                 value={values.price}
//                                 keyboardType='number-pad'
//                                 onChangeText={handleChange('price')}
//                             />
//                             <TextInput
//                                 style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
//                                 placeholder='Address'
//                                 value={values.address}
//                                 onChangeText={handleChange('address')}
//                             />
//                             <Picker
//                                 selectedValue={values.category}
//                                 style={{ height: 50, width: hp(30) }}
//                                 onValueChange={handleChange('category')}>
//                                 {
//                                     categoryList && categoryList.map((category: any, index: number) => {
//                                         return (<Picker.Item label={category.name} value={category.name} key={index} />)
//                                     })
//                                 }

//                             </Picker>
//                             <TouchableOpacity onPress={handleSubmit} style={{
//                                 margin: hp(1),
//                                 backgroundColor: loading ? '#ccc' : '#0078FF',
//                                 padding: hp(1)
//                             }}
//                                 disabled={loading}
//                             >
//                                 {
//                                     loading ? <ActivityIndicator color='#fff' style={{ width: 50 }} /> :
//                                         <Text style={{ fontSize: 17, color: 'blue' }}>Submit</Text>
//                                 }

//                             </TouchableOpacity>
//                         </View>
//                     )}
//                 </Formik >
//             </ScrollView>
//         </KeyboardAvoidingView>

//     )
// }

// export default AddPostScreen


import { View, Text, TextInput, Button, TouchableOpacity, Dimensions, Image, ToastAndroid, Alert, ActivityIndicator, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { app } from '../firebaseConfig';
import { Formik } from 'formik';
import * as FileSystem from 'expo-file-system';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const AddPostScreen = () => {
    const [categoryList, setCategoryList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [image, setImage] = useState<any>();
    const db = getFirestore(app);
    const { height, width } = Dimensions.get('window');
    const storage = getStorage();

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db, 'Category'));
        querySnapshot.forEach((doc: any) => {
            setCategoryList((categoryList) => [...categoryList, doc.data()]);
        });
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]?.uri);
        }
    };

    const onSubmitMethod = async (value: any) => {
        setLoading(true);
        const resp = await fetch(image);
        const blob = await resp.blob();
        const storageRef = ref(storage, 'communityPost/' + Date.now() + '.jpg');

        uploadBytes(storageRef, blob).then(() => {
            getDownloadURL(storageRef).then(async (downloadUrl: any) => {
                value.image = downloadUrl;
                const docRef = await addDoc(collection(db, "userPost"), value);
                if (docRef.id) {
                    value.title = '',
                        value.address = '',
                        value.desc = '',
                        setImage(null),
                        value.price = '',
                        value.address = ''
                    setLoading(false);
                    Alert.alert("Success!", "Post added successfully.");

                }
            });
        });
    };

    return (
        <KeyboardAvoidingView style={{ marginTop: 100, flex: 1 }}>
            <ScrollView>
                <Formik
                    initialValues={{
                        title: '',
                        desc: '',
                        category: '',
                        address: '',
                        price: '',
                        image: '',
                        createdAt: Date.now(),
                    }}
                    onSubmit={value => onSubmitMethod(value)}
                    validate={(value) => {
                        const errors: { title?: string } = {};
                        if (!value.title) {
                            ToastAndroid.show('Title is required', ToastAndroid.SHORT);
                            errors.title = 'Title is required';
                        }
                        return errors;
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }: any) => (
                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>Add New Post</Text>
                            <Text style={{ fontSize: hp(2) }}>Create a new post and start selling</Text>

                            <TouchableOpacity
                                onPress={pickImage}
                                style={{
                                    margin: hp(1),
                                    backgroundColor: '#b3e6ff',
                                    padding: 5,
                                    borderRadius: hp(1),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {image ? (
                                    <Image source={{ uri: image }} style={{ width: hp(15), height: hp(10) }} />
                                ) : (
                                    <Image
                                        style={{ height: hp(10), width: hp(15) }}
                                        source={require('@/assets/images/imagePlaceholder2.png')}
                                        resizeMode="stretch"
                                    />
                                )}
                            </TouchableOpacity>

                            <TextInput
                                style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                                placeholder="Title"
                                value={values.title}
                                onChangeText={handleChange('title')}
                            />
                            {errors.title && <Text style={{ color: 'red' }}>{errors.title}</Text>}

                            <TextInput
                                style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                                placeholder="Description"
                                value={values.desc}
                                numberOfLines={5}
                                textAlignVertical="top"
                                onChangeText={handleChange('desc')}
                            />

                            <TextInput
                                style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                                placeholder="Price"
                                value={values.price}
                                keyboardType="number-pad"
                                onChangeText={handleChange('price')}
                            />

                            <TextInput
                                style={{ borderWidth: 1, borderRadius: 10, padding: 10, paddingHorizontal: 17, fontSize: 17, width: hp(30), marginVertical: hp(1) }}
                                placeholder="Address"
                                value={values.address}
                                onChangeText={handleChange('address')}
                            />

                            <Picker
                                selectedValue={values.category}
                                style={{ height: 50, width: hp(30) }}
                                onValueChange={handleChange('category')}
                            >
                                {categoryList.map((category: any, index: number) => (
                                    <Picker.Item label={category.name} value={category.name} key={index} />
                                ))}
                            </Picker>

                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={{
                                    margin: hp(1),
                                    backgroundColor: loading ? '#ccc' : '#0078FF',
                                    padding: hp(1),
                                }}
                                disabled={loading}
                            >
                                {loading ? <ActivityIndicator color="#fff" style={{ width: 50 }} /> : <Text style={{ fontSize: 17, color: '#fff' }}>Submit</Text>}
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddPostScreen;
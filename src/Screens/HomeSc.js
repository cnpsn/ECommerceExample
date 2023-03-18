import { VirtualizedList, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { View, TouchableOpacity } from 'react-native-ui-lib'
// Context
import { ThemeContext } from '../Contexts/ThemeContext';
// Components
import ProductCard from '../Components/HomeSc/ProductCard';
import HeaderBar from '../Components/HomeSc/HeaderBar';
// Service
import { getProducts } from '../service/index'

const editImageUri = (uri) => {
    return uri.replace('http', 'https')
}

const editData = (data) => {
    return data
        .map(el => ({
            ...el,
            image: editImageUri(el.image),
            isAdded: false
        }))
}

export default function HomeSc() {
    const [isLoading, setisLoading] = useState(false)
    const [data, setdata] = useState([])
    const { theme } = useContext(ThemeContext)

    const addToCardPress = () => {

    }

    const get = async () => {
        try {
            setisLoading(true)
            const result = await getProducts()
            setdata(editData(result.data))
        } catch (error) {
            console.log(error);
        } finally { setisLoading(false) }
    }

    useEffect(() => { get() }, [])

    return (
        <View flex style={{ backgroundColor: theme.backgroundSurface }}>
            <HeaderBar />
            <VirtualizedList
                keyExtractor={(_, index) => index}
                data={data}
                getItem={(data, index) => data[index]}
                getItemCount={data => data.length}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item, index }) => {
                    if (index % 2 === 0) {
                        return <View style={{ flexDirection: 'row' }}>
                            <ProductCard item={item} index={index} />
                            {data[index + 1] && <ProductCard item={data[index + 1]} index={index + 1} />}
                        </View>
                    }
                    return null;
                }}
            />
        </View>
    )
}
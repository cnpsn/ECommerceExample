import { View, VirtualizedList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// Components
import ProductCard from '../Components/HomeSc/ProductCard';
// Service
import { getProducts } from '../service/index'

const editImageUri = (uri) => {
    return uri.replace('http', 'https')
}

export default function HomeSc() {
    const [isLoading, setisLoading] = useState(false)
    const [data, setdata] = useState([])

    const get = async () => {
        try {
            setisLoading(true)
            const result = await getProducts({ brand: "Tesla" })
            const helperArray = result
                .data.map(el => ({ ...el, image: editImageUri(el.image) }))
            setdata(helperArray)
        } catch (error) {
            console.log(error);
        } finally { setisLoading(false) }
    }

    useEffect(() => { get() }, [])

    return (
        <View style={{ flex: 1 }}>
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
const styles = StyleSheet.create({
    productCardContainer: {
        width: "50%",
        paddingHorizontal: 4,
    },
    image: {
        aspectRatio: 2 / 3
    }
})
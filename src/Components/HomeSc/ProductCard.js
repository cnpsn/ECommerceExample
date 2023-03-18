import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ProductCard({ item }) {
    const { brand, createdAt, description, id, image, model, name, price } = item
    return (
        <View style={[styles.productCardContainer]}>
            <Text>asdas</Text>
            <Image source={{ uri: image }} style={[styles.image]} />
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
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import React, { useContext } from 'react'
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'
// Icons
import HeartFilled from '../../Assets/SvgIconsComponents/HeartFilled'

export default function ProductCard({ item }) {
    const { brand, createdAt, description, id, image, model, name, price, isAdded } = item
    const { theme } = useContext(ThemeContext)
    return (
        <View
            bg-grey70
            style={[styles.productCardContainer]}
            key={id}
        >
            <FastImage
                style={[styles.image]}
                source={{
                    uri: image,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            >
                <Text text50L style={[styles.priceText]}>₺{price}</Text>
                <View style={[styles.favoriteContainer]}>
                    <HeartFilled color={theme.backgroundSurface} width={30} height={30} />
                </View>
            </FastImage>
            <View style={[styles.contentContainer, { backgroundColor: theme.backgroundSurface }]}>
                <Text text60R>{brand}</Text>
                <Text text70L>{name}</Text>
            </View>
            <View style={[styles.buttonContainer, { backgroundColor: theme.backgroundSurface }]}>
                <TouchableOpacity style={[styles.button]}>
                    <Text textL white>Add to Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    productCardContainer: {
        width: "50%",
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    favoriteContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        right: 0
    },
    buttonContainer: {
        padding: 8
    },
    button: {
        minHeight: 48,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        padding: 8
    },
    image: {
        aspectRatio: 2 / 3
    },
    priceText: {
        color: "white",
        position: "absolute",
        bottom: 8,
        left: 8
    }
})
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import React, { useContext } from 'react'
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'
// Icons
import HeartFilled from '../../Assets/SvgIconsComponents/HeartFilled'
import { GlobalContext } from '../../Contexts/GlobalContext'

export default function ProductCard({ item }) {
    const { brand, id, image, model, price } = item
    const { theme } = useContext(ThemeContext)
    const { toggleFavorite } = useContext(GlobalContext)
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
                <TouchableOpacity onPress={() => toggleFavorite(item)} style={[styles.favoriteContainer]}>
                    <HeartFilled color={theme.primary} width={30} height={30} />
                </TouchableOpacity>
            </FastImage>
            <View style={[styles.contentContainer, { backgroundColor: theme.backgroundSurface }]}>
                <Text text60R>{brand}</Text>
                <Text text70L>{model}</Text>
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
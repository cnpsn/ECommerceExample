import { StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import React, { useContext } from 'react'
// Components
import MainButton from '../Global/MainButton';
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'
// Icons
import HeartFilled from '../../Assets/SvgIconsComponents/HeartFilled'
import { GlobalContext } from '../../Contexts/GlobalContext'

export default function ProductCard({ item }) {
    const { addToCartPress, toggleFavorite } = useContext(GlobalContext)
    const { brand, id, image, name, price, isFavorite } = item
    const { theme } = useContext(ThemeContext)
    const navigation = useNavigation();

    const goDetail = () => navigation.navigate("ProductDetailSc", { item })

    return (
        <TouchableNativeFeedback onPress={goDetail}>
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
                        <HeartFilled color={isFavorite ? theme.primary : theme.backgroundSurface} width={30} height={30} />
                    </TouchableOpacity>
                </FastImage>
                <View style={[styles.contentContainer, { backgroundColor: theme.backgroundSurface }]}>
                    <Text text60R>{brand}</Text>
                    <Text text70L>{name}</Text>
                </View>
                <MainButton label="Add to Cart" onPress={() => addToCartPress(item)} />
            </View>
        </TouchableNativeFeedback>
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
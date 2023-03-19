import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import React, { useContext } from 'react'
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'
import { GlobalContext } from '../../Contexts/GlobalContext'

export default function ProductCard({ item }) {
    const { addToCartPress, removeFromCartPress } = useContext(GlobalContext)
    const { brand, image, model, price, name, quantity } = item
    const { theme } = useContext(ThemeContext)

    return (
        <View style={[styles.container, { borderColor: theme.outlineDefault }]}>
            <FastImage
                style={[styles.image]}
                source={{
                    uri: image,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            ></FastImage>
            <View style={[styles.contentContainer]}>
                <View style={[styles.contentTopContainer]}>
                    <Text text60R>{model}</Text>
                    <Text text70L>{brand}</Text>
                    <Text text80L>{name}</Text>
                </View>
                <View style={[styles.contentBottomContainer]}>
                    <Text flex text70R>₺{price}</Text>
                    <View style={[styles.increaseDecreaseContainer, { backgroundColor: theme.backgroundDefault }]}>
                        <TouchableOpacity onPress={() => removeFromCartPress(item)} style={[styles.increaseDecreaseButton]}>
                            <Text text70L>-</Text>
                        </TouchableOpacity>
                        <View style={[styles.increaseDecreaseButton]}><Text text70M>{quantity}</Text></View>
                        <TouchableOpacity onPress={() => addToCartPress(item)} style={[styles.increaseDecreaseButton]}>
                            <Text text70L>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingVertical: 8
    },
    image: {
        aspectRatio: 2 / 3,
        minHeight: 160
    },
    contentContainer: {
        flex: 1
    },
    contentTopContainer: {
        flex: 1,
        padding: 8
    },
    contentBottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8
    },
    increaseDecreaseContainer: {
        flexDirection: "row",
        alignItems: "center"

    },
    increaseDecreaseButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})
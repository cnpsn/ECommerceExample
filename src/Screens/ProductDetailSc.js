import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native'
import { View, Text } from 'react-native-ui-lib'
import FastImage from 'react-native-fast-image'
import React, { useContext } from 'react'
// Context
import { ThemeContext } from '../Contexts/ThemeContext';
import { GlobalContext } from '../Contexts/GlobalContext';
// Icons
import ArrowLeft from '../Assets/SvgIconsComponents/ArrowLeft'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
// Component
import MainButton from '../Components/Global/MainButton';

export default function ProductDetailSc(props) {
    const { item: { description, image, brand, name, price } } = props.route.params
    const { theme } = useContext(ThemeContext)
    const { addToCartPress } = useContext(GlobalContext)

    const navigation = useNavigation();

    const backAction = () => navigation.goBack()

    return (
        <View flex>
            <View style={[styles.backAction]}>
                <SafeAreaView />
                <TouchableOpacity onPress={backAction} style={[styles.iconContainer]}>
                    <ArrowLeft width={32} height={32} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ backgroundColor: theme.backgroundSurface, flex: 1 }}>
                <FastImage
                    style={[styles.image]}
                    source={{
                        uri: image,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                ></FastImage>
                <View style={[styles.contentContainer]}>
                    <Text text50R>{brand}</Text>
                    <Text text70L>{name}</Text>
                    <Text text80R marginT-32>{description}</Text>
                </View>
            </ScrollView>
            <View style={[styles.footerContainer, { backgroundColor: theme.backgroundSurface }]}>
                <Text text50M marginH-16>₺{price}</Text>
                <MainButton
                    onPress={() => addToCartPress(props.route.params.item)}
                    label="Add to Cart"
                    style={{ flex: 1 }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        aspectRatio: 2 / 3
    },
    backAction: {
        position: "absolute",
        left: 16,
        zIndex: 1
    },
    iconContainer: {
        borderRadius: 22,
        height: 44,
        width: 44,
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        padding: 16
    },
    footerContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})
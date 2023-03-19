import { SafeAreaView, StyleSheet, VirtualizedList, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import React, { useContext } from 'react'
// Context
import { GlobalContext } from '../Contexts/GlobalContext'
import { ThemeContext } from '../Contexts/ThemeContext'
// Components
import ProductCard from '../Components/BasketSc/ProductCard'
// Methots
import getTotalAmount from '../Methots/getTotalAmount'

export default function BasketSc() {
    const { basketData } = useContext(GlobalContext)
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundSurface }]}>
            <SafeAreaView />
            <View style={[styles.body]}>
                <VirtualizedList
                    ListHeaderComponent={<View>
                        <Text style={{ color: theme.black }} text40BO>Shopping Cart</Text>
                        <Text style={{ color: theme.black }} text70R marginT-8>{`${basketData.length} items`}</Text>
                        <View style={{ height: 1, backgroundColor: theme.black, marginVertical: 8 }} />
                    </View>}
                    keyExtractor={(_, index) => index}
                    data={basketData}
                    getItem={(data, index) => data[index]}
                    getItemCount={data => data.length}
                    contentContainerStyle={{ flexGrow: 1 }}
                    renderItem={({ item }) => <ProductCard item={item} />}
                />
            </View>
            <View style={[styles.footer]}>
                <View style={[styles.footerContent]}>
                    <Text text70L>Sub total</Text>
                    <Text text50BO>₺{getTotalAmount(basketData)}</Text>
                </View>
                <View style={[styles.buttonContainer, { backgroundColor: theme.backgroundSurface }]}>
                    <TouchableOpacity
                        onPress={() => addToCartPress(item)}
                        style={[styles.button, { backgroundColor: theme.black }]}
                    >
                        <Text text70L white>Check out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        padding: 16
    },
    footer: {

    },
    footerContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16
    },
    buttonContainer: {
        padding: 16
    },
    button: {
        minHeight: 48,
        justifyContent: "center",
        alignItems: "center"
    },
})
import { View, SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'
// Components
import SearchView from './SearchView'
// Icons
import AdjustmentsHorizontal from '../../Assets/SvgIconsComponents/AdjustmentsHorizontal'

export default function HeaderBar() {
    const { theme } = useContext(ThemeContext)

    return (
        <SafeAreaView>
            <View style={[styles.container]}>
                <SearchView />
                <View style={[styles.filterContainer]}>
                    <AdjustmentsHorizontal width={32} height={32} color={theme.black} />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        minHeight: 54,
        paddingHorizontal: 32,
        marginBottom: 16
    },
    filterContainer: {
        minWidth: 48,
        minHeight: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    }
})
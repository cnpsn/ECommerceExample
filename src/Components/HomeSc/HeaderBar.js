import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'
import { GlobalContext } from '../../Contexts/GlobalContext'
// Components
import SearchView from './SearchView'
// Icons
import AdjustmentsHorizontal from '../../Assets/SvgIconsComponents/AdjustmentsHorizontal'

export default function HeaderBar() {
    const { theme } = useContext(ThemeContext)
    const { filterModalOnOpen, filterList } = useContext(GlobalContext)
    const isFilterActive = filterList.some(element => element.data.some(el => el.selected))
    return (
        <SafeAreaView>
            <View style={[styles.container]}>
                <SearchView />
                <TouchableOpacity onPress={filterModalOnOpen} style={[styles.filterContainer]}>
                    <AdjustmentsHorizontal width={32} height={32} color={theme.black} />
                    {isFilterActive && <View style={[styles.point, { backgroundColor: theme.primary }]} />}
                </TouchableOpacity>
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
    },
    point: {
        width: 12,
        height: 12,
        borderRadius: 6,
        position: "absolute",
        top: 8,
        right: 8,
        elevation: 1,
        zIndex: 1
    }
})
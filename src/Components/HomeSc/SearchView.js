import { View, StyleSheet, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Contexts/ThemeContext'
// Icons
import Search from '../../Assets/SvgIconsComponents/Search'

export default function SearchView() {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme.textinputBackground }]}>
            <View style={[styles.searchIconContainer]}>
                <Search width={23} height={23} color={theme.black} />
            </View>
            <TextInput
                style={[styles.textInputContainer, { color: theme.black }]}
                placeholder="Search"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    textInputContainer: {
        flex: 1,
    },
    searchIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8
    }
})
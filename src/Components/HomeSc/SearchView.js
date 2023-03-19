import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useRef } from 'react'
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'
import { GlobalContext } from '../../Contexts/GlobalContext'
// Icons
import Search from '../../Assets/SvgIconsComponents/Search'
import XCircle from '../../Assets/SvgIconsComponents/XCircle'

export default function SearchView() {
    const { setsearchValue } = useContext(GlobalContext)
    const { theme } = useContext(ThemeContext)
    const [text, setText] = useState('');
    const textInputRef = useRef(null);

    const handlePress = () => {
        setsearchValue(text)
    }

    const clearPress = () => {
        textInputRef.current.clear();
        setsearchValue("")
        setText("")
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.textinputBackground }]}>
            <View style={[styles.searchIconContainer]}>
                <Search width={23} height={23} color={theme.black} />
            </View>
            <TextInput
                style={[styles.textInputContainer, { color: theme.black }]}
                onChangeText={text => setText(text)}
                onSubmitEditing={handlePress}
                placeholder="Search"
                ref={textInputRef}
            />
            {text && <TouchableOpacity onPress={clearPress} style={[styles.closeIconContainer]}>
                <XCircle width={17} height={17} color={theme.black} />
            </TouchableOpacity>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    textInputContainer: {
        flex: 1,
        height: "100%",
    },
    searchIconContainer: {
        paddingHorizontal: 8
    },
    closeIconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8
    }
})
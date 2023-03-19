import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import React, { useContext } from 'react'
// Context
import { ThemeContext } from '../../Contexts/ThemeContext'

export default function MainButton({ label, onPress, style }) {
    const { theme } = useContext(ThemeContext)
    return (
        <View style={[styles.buttonContainer, { backgroundColor: theme.backgroundSurface, ...style }]}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.button, { backgroundColor: theme.black }]}
            >
                <Text text70L white>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        padding: 8
    },
    button: {
        minHeight: 48,
        justifyContent: "center",
        alignItems: "center"
    },
})
import React, { useContext } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native';
// Context
import { ThemeContext } from '../../Contexts/ThemeContext';

const { width, height } = Dimensions.get('window');

export default function Indicator({ hideBackdrop }) {
    const { theme } = useContext(ThemeContext)

    return (
        <View style={[styles.container, { backgroundColor: hideBackdrop ? "transparent" : theme.backdrop }]}>
            <View style={[styles.lottieView]}>
                <LottieView source={require("../../Assets/Lottie/indicator.json")} autoPlay />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        position: "absolute",
        zIndex: 2,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lottieView: {
        width: 140,
        height: 140,
    }
})
import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Text, View } from 'react-native-ui-lib'
import { Modalize } from 'react-native-modalize';
// Context
import { GlobalContext } from '../../Contexts/GlobalContext';
import { ThemeContext } from '../../Contexts/ThemeContext';

export default function FilterModal() {
    const { modalizeRef, setFilterList, modalFilterList, setModalFilterList } = useContext(GlobalContext)
    const { theme } = useContext(ThemeContext)

    const applyPress = () => {
        const helperJson = JSON.stringify(modalFilterList)
        const helperArray = JSON.parse(helperJson)
        setFilterList(helperArray)
        modalizeRef.current?.close()
    }

    const badgePress = (sectionIndex, index) => {
        const helperJson = JSON.stringify(modalFilterList)
        const helperArray = JSON.parse(helperJson)
        const section = helperArray[sectionIndex]
        section.data = section.data
            .map((element, _index) => ({ ...element, selected: index == _index ? !element.selected : false }))
        setModalFilterList(helperArray)
    }

    return (
        <Modalize
            ref={modalizeRef}
            adjustToContentHeight
            modalStyle={{ backgroundColor: theme.backgroundSurface, paddingTop: 32 }}
        >
            {modalFilterList.map((sectionElement, sectionIndex) => {
                const { title, data } = sectionElement
                return <View key={sectionIndex}>
                    <Text marginL-32 text50L black>{title}</Text>
                    <View style={[styles.badgeContainer]}>
                        {data.map((element, index) => {
                            return <TouchableOpacity
                                key={index}
                                style={[styles.badge, {
                                    marginLeft: 8,
                                    backgroundColor: element.selected ? theme.primary : theme.textinputBackground
                                }]}
                                onPress={() => badgePress(sectionIndex, index)}
                            >
                                <Text text70R
                                    style={{ color: element.selected ? theme.white : theme.black }}>
                                    {element.name}
                                </Text>
                            </TouchableOpacity>
                        })}
                    </View>
                </View>
            })}
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity onPress={applyPress} style={[styles.button, { backgroundColor: theme.black }]}>
                    <Text text70M white>Apply</Text>
                </TouchableOpacity>
            </View>
        </Modalize>
    )
}
const styles = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    categoryAvatar: {
        minWidth: 50,
        minHeight: 50,
        borderRadius: 100
    },
    badgeContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 8,
        flex: 1
    },
    badge: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 100,
        marginBottom: 8
    },
    button: {
        minHeight: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        paddingHorizontal: 32,
        paddingVertical: 16
    }
})
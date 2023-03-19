import { VirtualizedList, SafeAreaView } from 'react-native'
import { View, Text } from 'react-native-ui-lib'
import React, { useContext } from 'react'
// Context
import { GlobalContext } from '../Contexts/GlobalContext'
import { ThemeContext } from '../Contexts/ThemeContext'
// Components
import ProductCard from '../Components/FavoritesSc/ProductCard'

export default function FavoritesSc() {
    const { favoritesData } = useContext(GlobalContext)
    const { theme } = useContext(ThemeContext)

    return (
        <View flex style={{ backgroundColor: theme.backgroundSurface }}>
            <SafeAreaView />
            <VirtualizedList
                keyExtractor={(_, index) => index}
                data={favoritesData}
                getItem={(data, index) => data[index]}
                getItemCount={data => data.length}
                contentContainerStyle={{ flexGrow: 1 }}
                ListHeaderComponent={<View padding-16>
                    <Text style={{ color: theme.black }} text40BO>Favorites</Text>
                    <Text style={{ color: theme.black }} text70R marginT-8>{`${favoritesData.length} items`}</Text>
                    <View style={{ height: 1, backgroundColor: theme.black, marginVertical: 8 }} />
                </View>}
                renderItem={({ item, index }) => {
                    if (index % 2 === 0) {
                        return <View style={{ flexDirection: 'row' }}>
                            <ProductCard item={item} index={index} />
                            {favoritesData[index + 1] && <ProductCard item={favoritesData[index + 1]} index={index + 1} />}
                        </View>
                    }
                    return null;
                }}
            />
        </View>
    )
}
import { View } from 'react-native-ui-lib'
import { VirtualizedList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useContext, useRef } from 'react'
// Context
import { ThemeContext } from '../Contexts/ThemeContext';
import { GlobalContext } from '../Contexts/GlobalContext';
// Components
import ProductCard from '../Components/HomeSc/ProductCard';
import FilterModal from '../Components/HomeSc/FilterModal';
import HeaderBar from '../Components/HomeSc/HeaderBar';
import Indicator from '../Components/Global/Indicator';
// Service
import { getProducts } from '../service/index'

const LIMIT = 12;

const updateData = (data, favoritesData) => {
    return data
        .map(element => ({
            ...element,
            isFavorite: favoritesData.some(x => x.id == element.id)
        }))
}

const editImageUri = (uri) => {
    return uri.replace('http', 'https')
}

const editData = (data, favoritesData) => {
    return data
        .map(el => ({
            ...el,
            image: editImageUri(el.image),
            isFavorite: favoritesData.some(x => x.id == el.id)
        }))
}

const getQueryParams = (filters, searchValue, page, limit) => {
    const helperObject = {}
    filters.forEach(element => {
        const { data, title } = element
        const selectedItems = data.filter(x => x.selected)
        if (selectedItems.length) { helperObject[title] = selectedItems[0].name }
    });
    return { ...helperObject, name: searchValue, page, limit }
}

export default function HomeSc() {
    const { filterList, searchValue, favoritesData, realm } = useContext(GlobalContext)
    const { theme } = useContext(ThemeContext)

    const [loadMoreIsLoading, setloadMoreIsLoading] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const [data, setdata] = useState([])

    const loadMoreIsFinish = useRef(false)
    const page = useRef(1)

    const get = async () => {
        try {
            setisLoading(true)
            loadMoreIsFinish.current = false
            page.current = 1
            const params = getQueryParams(filterList, searchValue, page.current, LIMIT)
            const products = await getProducts(params)
            const result = editData(products.data, realm.objects('Favorites'))
            setdata(result)
        } catch (error) {
            console.log(error);
        } finally { setisLoading(false) }
    }

    const onEndReached = async () => {
        if (isLoading || loadMoreIsFinish.current) { return; }
        try {
            setloadMoreIsLoading(true)
            loadMoreIsFinish.current = true
            ++page.current
            const params = getQueryParams(filterList, searchValue, page.current, LIMIT)
            const products = await getProducts(params)
            const result = editData(products.data, favoritesData)
            if (result.length == LIMIT) {
                loadMoreIsFinish.current = false
            }
            setdata(data.concat(result))
        } catch (error) {
            console.log(error);
        } finally {
            setloadMoreIsLoading(false)
        }
    }

    useEffect(() => {
        const result = updateData(data, favoritesData)
        setdata(result)
    }, [favoritesData])

    useEffect(() => { get() }, [filterList, searchValue])

    return (
        <View flex style={{ backgroundColor: theme.backgroundSurface }}>
            <HeaderBar />
            {isLoading && <Indicator />}
            <VirtualizedList
                keyExtractor={(_, index) => index}
                data={data}
                getItem={(data, index) => data[index]}
                getItemCount={data => data.length}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item, index }) => {
                    if (index % 2 === 0) {
                        return <View style={{ flexDirection: 'row' }}>
                            <ProductCard item={item} index={index} />
                            {data[index + 1] && <ProductCard item={data[index + 1]} index={index + 1} />}
                        </View>
                    }
                    return null;
                }}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loadMoreIsLoading && !isLoading && <View padding-16 center>
                    <ActivityIndicator size="large" color={theme.$iconDefault} />
                </View>}
            />
            <FilterModal />
        </View>
    )
}
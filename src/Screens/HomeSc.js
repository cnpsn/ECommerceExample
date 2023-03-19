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

const editImageUri = (uri) => {
    return uri.replace('http', 'https')
}

const editData = (data) => {
    return data
        .map(el => ({
            ...el,
            image: editImageUri(el.image),
            isAdded: false
        }))
}

const getQueryParams = (filters) => {
    const helperObject = {}
    filters.forEach(element => {
        const { data, title } = element
        const selectedItems = data.filter(x => x.selected)
        if (selectedItems.length) { helperObject[title] = selectedItems[0].name }
    });
    return helperObject
}

export default function HomeSc() {
    const [loadMoreIsLoading, setloadMoreIsLoading] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const { filterList } = useContext(GlobalContext)
    const { theme } = useContext(ThemeContext)
    const loadMoreIsFinish = useRef(false)
    const [data, setdata] = useState([])
    const page = useRef(1)

    const get = async () => {
        try {
            setisLoading(true)
            loadMoreIsFinish.current = false
            page.current = 1
            const params = getQueryParams(filterList)
            const products = await getProducts({
                ...params,
                limit: LIMIT,
                page: page.current
            })
            const result = editData(products.data)
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
            const params = getQueryParams(filterList)
            const products = await getProducts({
                ...params,
                limit: LIMIT,
                page: page.current
            })
            const result = editData(products.data)
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

    useEffect(() => { get() }, [filterList])

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
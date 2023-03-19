import React, { createContext, useRef, useState, useEffect } from 'react'
import { staticFilters } from '../Content/staticFilters';
import { basketSchema } from '../Realm/basketSchema'
import { favoritesSchema } from '../Realm/favoritesSchema'
import Realm from "realm";
const { UUID } = Realm.BSON;

const GlobalContext = createContext();
let inlineRealm = null

function GlobalProvider(props) {
    const [filterList, setFilterList] = useState([...staticFilters])
    const [modalFilterList, setModalFilterList] = useState([...staticFilters])
    const [favoritesData, setFavoritesData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [basketData, setBasketData] = useState([])
    const [realm, setrealm] = useState(null)
    const modalizeRef = useRef(null);

    const filterModalOnOpen = async () => {
        const helperJson = JSON.stringify(filterList)
        const helperArray = JSON.parse(helperJson)
        setModalFilterList(helperArray)
        modalizeRef.current?.open();
    };

    const toggleFavorite = (element) => {
        const item = inlineRealm.objects('Favorites').filtered('id = $0', element.id)[0];
        if (item) {
            inlineRealm.write(() => {
                inlineRealm.delete(item);
            });
        } else {
            inlineRealm.write(() => {
                inlineRealm.create('Favorites', { ...element, _id: new UUID() });
            });
        }
        setFavoritesData(inlineRealm.objects('Favorites'))
    };

    const addToCartPress = (element) => {
        const item = inlineRealm.objects('Basket').filtered('id = $0', element.id)[0];
        if (!item) {
            inlineRealm.write(() => {
                inlineRealm.create('Basket', { ...element, quantity: 1, _id: new UUID() });
            });
        } else {
            inlineRealm.write(() => {
                item.quantity += 1;
            });
        }
        setBasketData(inlineRealm.objects('Basket'))
    };

    const removeFromCartPress = (element) => {
        const item = inlineRealm.objects('Basket').filtered('id = $0', element.id)[0];
        if (!item) {
            return;
        } else {
            inlineRealm.write(() => {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    inlineRealm.delete(item);
                }
            });
        }
        setBasketData(inlineRealm.objects('Basket'));
    };

    const getFromLocalStore = () => {
        setBasketData(inlineRealm.objects('Basket'))
        setFavoritesData(inlineRealm.objects('Favorites'))
    }

    useEffect(() => {
        Realm.open({ schema: [basketSchema, favoritesSchema] })
            .then((realm) => {
                inlineRealm = realm
                setrealm(realm)
                getFromLocalStore();
            });
    }, [])

    if (!realm) {
        return;
    }

    return (
        <GlobalContext.Provider value={{
            modalizeRef: modalizeRef,
            filterModalOnOpen: filterModalOnOpen,
            filterList: filterList,
            setFilterList: setFilterList,
            modalFilterList: modalFilterList,
            setModalFilterList: setModalFilterList,
            searchValue: searchValue,
            basketData: basketData,
            setSearchValue: setSearchValue,
            addToCartPress: addToCartPress,
            removeFromCartPress: removeFromCartPress,
            toggleFavorite: toggleFavorite,
            favoritesData: favoritesData,
            realm: realm,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
export { GlobalContext }

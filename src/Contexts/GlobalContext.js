import React, { createContext, useRef, useState, useEffect } from 'react'
import { staticFilters } from '../Content/staticFilters';
import { basketSchema } from '../Realm/basketSchema'
import Realm from "realm";
const { UUID } = Realm.BSON;

const GlobalContext = createContext();

function GlobalProvider(props) {
    const [filterList, setfilterList] = useState([...staticFilters])
    const [modalFilterList, setmodalFilterList] = useState([...staticFilters])
    const [searchValue, setsearchValue] = useState("")
    const [basketData, setbasketData] = useState([])
    const modalizeRef = useRef(null);

    const filterModalOnOpen = async () => {
        const helperJson = JSON.stringify(filterList)
        const helperArray = JSON.parse(helperJson)
        setmodalFilterList(helperArray)
        modalizeRef.current?.open();
    };

    const addToCartPress = (element) => {
        const realm = new Realm({ schema: [basketSchema] });
        const item = realm.objects('Basket').filtered('id = $0', element.id)[0];
        if (!item) {
            realm.write(() => {
                realm.create('Basket', { ...element, quantity: 1, _id: new UUID() });
            });
        } else {
            realm.write(() => {
                item.quantity += 1;
            });
        }
        setbasketData(realm.objects('Basket'))
    };

    const removeFromCartPress = (element) => {
        const realm = new Realm({ schema: [basketSchema] });
        const item = realm.objects('Basket').filtered('id = $0', element.id)[0];
        if (!item) {
            return;
        } else {
            realm.write(() => {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    realm.delete(item);
                }
            });
        }
        setbasketData(realm.objects('Basket'));
    };

    const getFromLocalStore = () => {
        const realm = new Realm({ schema: [basketSchema] });
        setbasketData(realm.objects('Basket'))
    }

    useEffect(() => { getFromLocalStore() }, [])

    return (
        <GlobalContext.Provider value={{
            modalizeRef: modalizeRef,
            filterModalOnOpen: filterModalOnOpen,
            filterList: filterList,
            setfilterList: v => setfilterList(v),
            modalFilterList: modalFilterList,
            setmodalFilterList: v => setmodalFilterList(v),
            searchValue: searchValue,
            basketData: basketData,
            setsearchValue: v => setsearchValue(v),
            addToCartPress: v => addToCartPress(v),
            removeFromCartPress: v => removeFromCartPress(v)
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider
export { GlobalContext }
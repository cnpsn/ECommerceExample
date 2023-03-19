import React, { createContext, useRef, useState } from 'react'
import { staticFilters } from '../Content/staticFilters';

const GlobalContext = createContext();

function GlobalProvider(props) {
    const [filterList, setfilterList] = useState([...staticFilters])
    const [modalFilterList, setmodalFilterList] = useState([...staticFilters])
    const [searchValue, setsearchValue] = useState("")
    const modalizeRef = useRef(null);

    const filterModalOnOpen = async () => {
        const helperJson = JSON.stringify(filterList)
        const helperArray = JSON.parse(helperJson)
        setmodalFilterList(helperArray)
        modalizeRef.current?.open();
    };

    return (
        <GlobalContext.Provider value={{
            modalizeRef: modalizeRef,
            filterModalOnOpen: filterModalOnOpen,
            filterList: filterList,
            setfilterList: v => setfilterList(v),
            modalFilterList: modalFilterList,
            setmodalFilterList: v => setmodalFilterList(v),
            searchValue: searchValue,
            setsearchValue: v => setsearchValue(v)
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider
export { GlobalContext }
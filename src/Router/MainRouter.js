import React, { useContext } from 'react'
// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Context
import { ThemeContext } from '../Contexts/ThemeContext'
import { GlobalContext } from '../Contexts/GlobalContext'
// Screens
import HomeSc from '../Screens/HomeSc'
import BasketSc from '../Screens/BasketSc'
import FavoritesSc from '../Screens/FavoritesSc'
// Icons 
import Home from '../Assets/SvgIconsComponents/Home'
import ShoppingBag from '../Assets/SvgIconsComponents/ShoppingBag'
import Heart from '../Assets/SvgIconsComponents/Heart'
//Methots
import getTotalQuantity from '../Methots/getTotalQuantity'

const Tab = createBottomTabNavigator();

const bottomTabDefaultOptions = {
    headerShown: false,
    tabBarShowLabel: false,
}

export default function MainRouter() {
    const { theme } = useContext(ThemeContext)
    const { basketData } = useContext(GlobalContext)
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='HomeSc' screenOptions={{ tabBarStyle: { borderTopWidth: 0 } }}>
                <Tab.Screen name="HomeSc" component={HomeSc} options={{
                    ...bottomTabDefaultOptions,
                    tabBarIcon: props => props.focused ? <Home width={34} height={34} color={theme.iconActive} />
                        : <Home width={34} height={34} color={theme.iconDisabled} />
                }}
                />
                <Tab.Screen name="BasketSc" component={BasketSc}
                    options={{
                        ...bottomTabDefaultOptions,
                        tabBarBadge: getTotalQuantity(basketData) || null,
                        tabBarIcon: props => props.focused ? <ShoppingBag width={34} height={34} color={theme.iconActive} />
                            : <ShoppingBag width={34} height={34} color={theme.iconDisabled} />
                    }}
                />
                <Tab.Screen name="FavoritesSc" component={FavoritesSc}
                    options={{
                        ...bottomTabDefaultOptions,
                        tabBarIcon: props => props.focused ? <Heart width={34} height={34} color={theme.iconActive} />
                            : <Heart width={34} height={34} color={theme.iconDisabled} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import RestaurantsStack from './RestaurantsStack'
import AccountStack from './AccountStack'
import FavoritesStack from './FavortiesStack'
import SearchStack from './SearchStack'
import TopRestaurantesStack from './TopRestaurantsStack'

const Tab = createBottomTabNavigator()

export default function Navigations() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title: "Restaurantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{title: "Favoritos"}}
                />
                <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantesStack}
                    options={{title: "Top 5"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title: "Buscar"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

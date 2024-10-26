import { Tabs } from 'expo-router';
import React from 'react';
import { Home, Heart, UserRound } from 'lucide-react-native';

import { useColorScheme } from '~/lib/useColorScheme';

export default function TabsLayout() {
    const { isDarkColorScheme } = useColorScheme();
    const ICON_SIZE = 22;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: isDarkColorScheme ? '#2D2D2D' : '#F5F5F5',
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: isDarkColorScheme ? '#B88A44' : '#D4AF37',
                tabBarInactiveTintColor: isDarkColorScheme ? '#6B7280' : '#9CA3AF',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    title: "Home",
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Home
                            size={ICON_SIZE}
                            color={color}
                            strokeWidth={focused ? 2.5 : 2}
                        />
                    ),
                }}
            />


            <Tabs.Screen
                name="wishlist/index"
                options={{
                    title: "Wishlist",
                    tabBarLabel: 'Wishlist',
                    tabBarIcon: ({ color, focused }) => (
                        <Heart
                            size={ICON_SIZE}
                            color={color}
                            strokeWidth={focused ? 2.5 : 2}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="account/index"
                options={{
                    title: "Account",
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, focused }) => (
                        <UserRound
                            size={ICON_SIZE}
                            color={color}
                            strokeWidth={focused ? 2.5 : 2}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
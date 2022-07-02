import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button, SafeAreaView, Text } from 'react-native';

export default function App() {
    // const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const [isOpen, setIsOpen] = useState(false);
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1}}>
                    <Navigation/>
                </SafeAreaView>
            </GestureHandlerRootView>
        );
    // }
}

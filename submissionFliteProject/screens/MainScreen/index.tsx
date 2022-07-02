import React, { useCallback, useEffect, useState } from 'react';
import {
    Button,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from '../styles';
import BottomDrawer from '../../components/bottomDrawer';
import Card from '../../components/card';
import { ITEMS } from './constants';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Homescreen = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const focused = useIsFocused();
    const navigation = useNavigation();
    const onClick = useCallback(() => {
        navigation.navigate('Alternate');
        
    },[])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Demo App</Text>
            <Pressable
                style={styles.button}
                onPress={() => setIsDrawerOpen(true)}
            >
                <Text style={styles.buttonText}>Click to open Drawer</Text>
            </Pressable>
            <BottomDrawer
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <FlatList
                    contentContainerStyle={[{ paddingBottom: 50, backgroundColor:'#e2e2e2' }]}
                    data={ITEMS}
                    keyExtractor={(item) => item.title}
                    renderItem={(item) => {
                        return <Card onClick={onClick} data={item.item} />;
                    }}
                />
            </BottomDrawer>
        </View>
    );
};

export default Homescreen;

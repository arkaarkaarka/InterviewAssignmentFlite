import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';

const AlternateScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yes, it works</Text>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.goBack()}}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        
        </View>
    )
}

export default AlternateScreen;
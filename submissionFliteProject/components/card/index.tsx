import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    data: {
        title: string;
        subTitle: string;
        image: any;
    };
    onClick: () => void;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2e2e2',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: 'white',
        flexDirection: 'row',
        padding: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 18,
        lineHeight: 30,
        overflow: 'hidden',
    },
    subTitle: {
        color: 'gray',

        overflow: 'hidden',
    },
    icon: {
        width: 50,
        height: 50,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 4,
    },
});

const Index = (props: Props) => {
    const { data, onClick } = props;
    const { title, subTitle, image } = data;

    return (
        <Pressable onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Index;

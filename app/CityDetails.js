// app/CityDetails.js

import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';

export default function CityDetails({ route }) {
    const { city } = route.params; 

    const renderAttraction = ({ item }) => (
        <Text style={styles.attractionItem}>{item}</Text>
    );

    return (
        <ImageBackground source={{ uri: city.image }} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>{city.name}</Text>
                    <Text style={styles.description}>{city.description}</Text>
                    <Text style={styles.attractionsTitle}>Pontos Turísticos:</Text>
                    <FlatList
                        data={city.attractions}
                        renderItem={renderAttraction}
                        keyExtractor={(item) => item}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover', 
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: 10,
        margin: 20,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#800080',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
        lineHeight: 22, 
    },
    attractionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#800080',
    },
    attractionItem: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
});

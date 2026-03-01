import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function MoviesFavScreen({ navigation }) {

    const movies = [
        { id: 1, name: 'Yo Antes de Ti', image: require('../assets/antes.jpeg') },
        { id: 2, name: 'El Cadáver de la Novia', image: require('../assets/cadaver.jpeg') },
        { id: 3, name: 'Shrek', image: require('../assets/shrek.jpeg') }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Mis Películas Favoritas</Text>
        
            {movies.map(movie => (
                <View key={movie.id} style={styles.imageCard}>
                    <Image source={movie.image} style={styles.image} resizeMode="cover" />
                    <Text style={styles.imageText}>{movie.name}</Text>
                </View>
            ))}

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Regresar a Sobre Mí</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        padding: 20, 
        backgroundColor: '#E0E1DD', 
        alignItems: 'center' 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#0D1B2A', 
        marginBottom: 10 
    },
    description: {
        fontSize: 16,
        color: '#1B263B',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    imageCard: { 
        marginBottom: 25, 
        borderRadius: 15, 
        overflow: 'hidden', 
        backgroundColor: '#FFF', 
        width: '100%', 
        elevation: 8,
        borderWidth: 1,
        borderColor: '#1B263B'
    },
    image: { 
        width: '100%', 
        height: 450 
    },
    imageText: { 
        padding: 15, 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 18, 
        color: '#1B263B' 
    },
    button: { 
        backgroundColor: '#0D1B2A', 
        padding: 15, 
        borderRadius: 12, 
        width: '100%', 
        marginTop: 10, 
        alignItems: 'center' 
    },
    buttonText: { 
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});
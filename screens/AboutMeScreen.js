import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AboutMeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headerTitle}>Un poco sobre mí</Text>
            
            <View style={styles.descBox}>
                <Text style={styles.description}>
                    Mi nombre es Yuridia pero mis amigos me dicen Yuri, tengo 19 y mi cumpleaños es el 17 de Septiembre, 
                    soy la menor de 3 hermanos, me gusta jugar videojuegos en especial xbox, la musica que me gusta mas 
                    es rap y hiphop aunque a veces escucho pop, mi color favorito es el negro y el azul.
                </Text>
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate("FoodFav")}
            >
                <Text style={styles.buttonText}>Comidas Favoritas</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate("MoviesFav")}
            >
                <Text style={styles.buttonText}>Películas Favoritas</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, {backgroundColor: '#778DA9'}]} 
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText}>Volver a Inicio</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#E0E1DD',
        padding: 25,
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0D1B2A',
        marginVertical: 20
    },
    descBox: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 15,
        marginBottom: 30,
        borderLeftWidth: 5,
        borderLeftColor: '#415A77'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#1B263B',
        textAlign: 'justify'
    },
    button: {
        backgroundColor: '#0D1B2A',
        padding: 15,
        borderRadius: 12,
        width: '100%',
        marginVertical: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
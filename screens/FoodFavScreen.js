import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function FoodFavScreen({ navigation }) {
  
    const foods = [
        { id: 1, name: 'Sushi', url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500' },
        { id: 2, name: 'Pizza', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500' },
        { id: 3, name: 'Ramen', url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=500' }
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
        
            <Text style={styles.title}>Mis Comidas Favoritas</Text>
            
            {foods.map(item => (
                <View key={item.id} style={styles.imageCard}>
                    <Image source={{ uri: item.url }} style={styles.image} />
                    <Text style={styles.imageText}>{item.name}</Text>
                </View>
            ))}

            {/* Este boton regresa a la pantalla de Sobre Mi */}
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
        marginBottom: 20 
    },
    imageCard: { 
        marginBottom: 20, 
        borderRadius: 15, 
        overflow: 'hidden', 
        backgroundColor: '#FFF', 
        width: '100%', 
        elevation: 5, 
        borderWidth: 1,
        borderColor: '#1B263B'
    },
    image: { 
        width: '100%', 
        height: 200 
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
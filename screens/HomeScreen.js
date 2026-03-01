import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Keila Yuridia Cervantes Guerrero</Text>
                <Text style={styles.subtitle}>Ing. en Desarrollo y Gestión de Software</Text>
                <Text style={styles.info}>5° A</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("ExampleEvent", { nombre: 'Yuri' })}
            >
                <Text style={styles.buttonText}>Ir a Eventos</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("Counter")}
            >
                <Text style={styles.buttonText}>Ir a Contador</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("AboutMe")}
            >
                <Text style={styles.buttonText}>Sobre Mí</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E1DD',
        padding: 20,
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#1B263B',
        padding: 25,
        borderRadius: 20,
        marginBottom: 40,
        alignItems: 'center',
        elevation: 5
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#FFFFFF',
        textAlign: "center"
    },
    subtitle: {
        fontSize: 16,
        color: '#778DA9',
        marginTop: 10
    },
    info: {
        fontSize: 14,
        color: '#FFFFFF',
        marginTop: 5
    },
    button: {
        backgroundColor: '#0D1B2A',
        padding: 15,
        borderRadius: 12,
        marginVertical: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
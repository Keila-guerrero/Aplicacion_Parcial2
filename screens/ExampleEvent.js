import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function EventsExample({ navigation, route }) {
    const { nombre = 'Yuri', total } = route.params || {};

    const handleShowBothData = () => {
        const mensajeContador = total !== undefined ? `El contador es: ${total}` : "Sin datos de contador";
        Alert.alert(
            "Resumen de Datos",
            `Usuario: ${nombre}\n${mensajeContador}`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Marcador de Eventos</Text>
            
            <View style={styles.infoCard}>
                <Text style={styles.label}>Nombre recibido:</Text>
                <Text style={styles.value}>{nombre}</Text>

                <View style={styles.divider} />

                <Text style={styles.label}>Contador recibido:</Text>
                <Text style={styles.value}>
                    {total !== undefined ? total : "---"}
                </Text>
            </View>

            <TouchableOpacity style={styles.mainButton} onPress={handleShowBothData}>
                <Text style={styles.buttonText}>Ver Alert Combinado</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.mainButton, { backgroundColor: '#778DA9' }]} 
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText}>Volver al Inicio</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E1DD',
        padding: 25,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0D1B2A',
        textAlign: 'center',
        marginBottom: 30
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        padding: 25,
        borderRadius: 20,
        elevation: 5,
        marginBottom: 30,
        borderLeftWidth: 8,
        borderLeftColor: '#1B263B'
    },
    label: {
        fontSize: 12,
        color: '#778DA9',
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    value: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1B263B',
        marginBottom: 15
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E1DD',
        marginVertical: 10
    },
    mainButton: {
        backgroundColor: '#0D1B2A',
        padding: 18,
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
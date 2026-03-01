import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Counter({ navigation }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Contador</Text>
            
            <View style={styles.displayContainer}>
                <Text style={styles.value}>{count}</Text>
            </View>

            <View style={styles.buttonContainer}>
                {/* botones de control iguales entre si */}
                <TouchableOpacity style={styles.actionButton} onPress={handleDecrement}>
                    <Text style={styles.buttonText}>-1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={handleReset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={handleIncrement}>
                    <Text style={styles.buttonText}>+1</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.mainButton}
                onPress={() => navigation.navigate("ExampleEvent", { total: count })}
            >
                <Text style={styles.mainButtonText}>Enviar a Eventos</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.mainButton, { backgroundColor: '#778DA9' }]} 
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.mainButtonText}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E1DD',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0D1B2A',
        marginBottom: 20
    },
    displayContainer: {
        backgroundColor: '#FFFFFF',
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginBottom: 40,
        borderWidth: 2,
        borderColor: '#1B263B'
    },
    value: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#0D1B2A',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30
    },
    actionButton: {
        backgroundColor: '#1B263B',
        paddingVertical: 15,
        borderRadius: 12,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center'
    },
    mainButton: {
        backgroundColor: '#0D1B2A',
        padding: 18,
        borderRadius: 12,
        width: '100%',
        marginVertical: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    mainButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
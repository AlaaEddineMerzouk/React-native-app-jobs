import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>My App</Text>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        flex: 1,
    },
});

export default Layout;
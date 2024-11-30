import React from 'react';
import { View, Text } from 'react-native';
import { useState } from 'react';
import {stack,useRouter} from 'expo-router';
import { COLORS,icons,images,SIZES,SHADOWS } from '../constants';
const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, World!</Text>
        </View>
    );
};


export default App;
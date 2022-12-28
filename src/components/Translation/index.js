import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import React, { useCallback, useState } from 'react';
import styles from './styles';
import { getTranslatedText } from '../../services/api';

export const Translation = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('English');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);
    const translateText = useCallback(async () => {
        setLoading(true);
        const result = await getTranslatedText(text, language);
        setTranslatedText(result);
        setLoading(false);
    }, [text, language]);
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter text to translate"
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholderTextColor={'#1116'}
            />
            <TextInput
                placeholder="Enter Language to translate in"
                style={styles.input}
                value={language}
                onChangeText={setLanguage}
                placeholderTextColor={'#1116'}
            />
            {loading ? (
                <ActivityIndicator size={'large'} color={'#2094FA'} />
            ) : (
                <Button title={`Translate to ${language}`} onPress={translateText} />
            )}
            <Text style={styles.translatedText}>{translatedText}</Text>
        </View>
    );
};
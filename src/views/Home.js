import React, { useState, useEffect, Fragment, useRef } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import loadAnimals from '../api/Animals';
import Card from '../components/Card';

const Home = ({ navigation }) => {
    const [animals, setAnimals] = useState();

    const useIsMounted = () => {
        const isMounted = useRef(false);
        useEffect(() => {
            isMounted.current = true;
            return () => (isMounted.current = false);
        }, []);
        return isMounted;
    };

    const isMounted = useIsMounted();

    useEffect(() => {
        if (isMounted.current) {loadAnimals(setAnimals); }
    }, [isMounted]);

    const handleCardTouch = (animal) => {
        navigation.navigate('Profile', { animal });
    }

    return animals ? (
        <Fragment>
            <StatusBar
                backgroundColor='white'
                barStyle='dark-content'
            />
            <Text style={styles.sectionTitle}>Lista de animais</Text>
            <FlatList
                data={animals}
                keyExtractor={(animal) => animal.id}
                renderItem={({ item }) =>
                    <Card animal={item} onPressCard={handleCardTouch} />
                }
            />
        </Fragment>
    ) : (
            <View style={styles.loading}>
                <Text>Carregando conteúdo...</Text>
            </View>
        );
};

const styles = StyleSheet.create({
    sectionTitle: {
        marginBottom: 20,
        marginLeft: 36,
        marginTop: 50,
        fontSize: 24,
        fontWeight: '600',
    },
    loading: {
        alignContent: 'center',
        textAlign: 'center',
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    }
});

export default Home;
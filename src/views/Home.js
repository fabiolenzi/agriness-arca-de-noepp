import React, { useState, useEffect, Fragment } from 'react';
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text
} from 'react-native';
import loadAnimals from '../api/Animals';
import Card from '../components/Card';


const Home = () => {
    const [animals, setAnimals] = useState();

    useEffect(() => {
        setTimeout(() => {loadAnimals(setAnimals)}, 3000);
    }, []);

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
                    <Card animal={item} />
                }
            />
        </Fragment>
    ) : (
            <Text>Loading</Text>
        );
};

const styles = StyleSheet.create({
    sectionTitle: {
        marginBottom: 20,
        marginLeft: 36,
        marginTop: 50,
        fontSize: 24,
        fontWeight: '600',
    }
});

export default Home;
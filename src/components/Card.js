import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({ animal }) => {

    const formatWeight = (weight, type) => {
        const fixedValue = weight.toFixed(1).replace('.', ',');
        if (type === 'POULTRY') {
            return `${fixedValue} g`
        } else {
            return `${fixedValue} kg`
        }
    }

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{animal.nome}</Text>
            <View style={styles.cardWrapper}>
                <View style={styles.cardTypeWrapper}>
                    <Text style={styles.cardWrapperTitle}>Tipo de animal</Text>
                    <LinearGradient
                        colors={['#0c3892', '#336aca']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.cardGradientWrapper}>
                        <Text style={styles.cardType}>{animal.tipoAnimal}</Text>
                    </LinearGradient>
                </View>
                <View style={styles.cardWeightWrapper}>
                    <Text style={styles.cardWrapperTitle}>Peso</Text>
                    <Text style={styles.cardWeight}>{formatWeight(animal.pesoCompra)}</Text>
                </View>
            </View>
            <View style={styles.locationWrapper}>
                <Text>C*</Text>
                <Text style={styles.cardLocation}>{animal.localizacao}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderColor: 'lightblue',
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 15
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    cardTypeWrapper: {
        flex: 1,
        borderColor: 'lightgrey',
        borderRightWidth: 2
    },
    cardWrapperTitle: {
        color: 'grey',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    cardGradientWrapper: {
        alignSelf: 'flex-start',
        backgroundColor: 'blue',
        borderRadius: 30,
        padding: 7
    },
    cardType: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    cardWeightWrapper: {
        flex: 1,
        marginLeft: 20
    },
    cardWeight: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    locationWrapper: {
        flexDirection: 'row'
    }
});

export default Card;
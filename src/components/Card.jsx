import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';

class Card extends React.Component {

    formatWeight = (weight, type) => {
        const fixedValue = weight.toFixed(1).replace('.', ',');
        if (type === 'POULTRY') {
            return `${fixedValue} g`
        } else {
            return `${fixedValue} kg`
        }
    };

    handleCardTouch = () => {
        this.props.onPressCard(this.props.animal);
    };

    render() {
        return (
            <TouchableOpacity style={styles.card} onPress={this.handleCardTouch}>
                <Text style={styles.cardTitle}>{this.props.animal.nome}</Text>
                <View style={styles.cardWrapper}>
                    <View style={styles.cardTypeWrapper}>
                        <Text style={styles.cardWrapperTitle}>Tipo de animal</Text>
                        <LinearGradient
                            colors={['#0c3892', '#336aca']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.cardGradientWrapper}>
                            <Text style={styles.cardType}>{this.props.animal.tipoAnimal}</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.cardWeightWrapper}>
                        <Text style={styles.cardWrapperTitle}>Peso</Text>
                        <Text style={styles.cardWeight}>{this.formatWeight(this.props.animal.pesoCompra)}</Text>
                    </View>
                </View>
                <View style={styles.locationWrapper}>
                    <Icon name='home' color='#0c3892' size={24} />
                    <Text style={styles.cardLocation}>{this.props.animal.localizacao}</Text>
                </View>
            </TouchableOpacity>
        );
    }
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
        borderColor: 'lightgray',
        borderRightWidth: 2
    },
    cardWrapperTitle: {
        color: 'gray',
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
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardLocation: {
        marginLeft: 5
    }
});

export default Card;
import React, { Fragment } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';
import AnimalsApi from '../api/Animals';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            animals: null,
            isLoading: true,
            search: ''
        }
    }

    _animals = null;
    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await AnimalsApi.getAnimals();
            this._animals = response;
            if (this._isMounted) {
                this.setState({
                    animals: response,
                    isLoading: false
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    openAnimalProfile = (animal) => {
        this.props.navigation.navigate('Profile', {
            animal,
            updateAnimalInList: this.updateAnimalInList.bind(this),
            removeAnimalFromList: this.removeAnimalFromList.bind(this)
        });
    }

    updateAnimalInList = (updatedAnimal) => {
        const listWithUpdatedAnimal = this.state.animals.map(animal => {
            return animal.id !== updatedAnimal.id ? animal : updatedAnimal;
        });
        this.setState({ animals: listWithUpdatedAnimal });
    }

    removeAnimalFromList = (id) => {
        const listWithoutDeletedAnimal = this.state.animals.filter(animal => animal.id !== id);
        this.setState({ animals: listWithoutDeletedAnimal });
    }

    onChangeText = (text) => {
        const searchedAnimals = text === '' ? this._animals : this._animals.filter(animal => {
            return (animal.nome.toLowerCase().includes(text.toLowerCase()) || animal.localizacao.toLowerCase().includes(text.toLowerCase()));
        });
        this.setState({
            animals: searchedAnimals,
            search: text
        });
    }

    render() {
        return (
            <Fragment>
                <StatusBar
                    backgroundColor='white'
                    barStyle='dark-content'
                />
                {this.state.animals
                    ? <Fragment>
                        <Text style={styles.sectionTitle}>Lista de animais</Text>
                        <TextInput
                            style={styles.search}
                            placeholder='Busca'
                            onChangeText={text => this.onChangeText(text)}
                            value={this.state.search}
                        />
                        <FlatList
                            data={this.state.animals}
                            keyExtractor={(animal) => animal.id}
                            renderItem={({ item }) =>
                                <Card animal={item} onPressCard={this.openAnimalProfile} />
                            }
                        />
                    </Fragment>
                    : <View style={styles.loading}>
                        <Text>Carregando conteúdo...</Text>
                    </View>
                }
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginHorizontal: 36,
        marginVertical: 10
    },
    search: {
        borderColor: 'gray',
        borderRadius: 12,
        borderWidth: 1,
        fontSize: 20,
        marginBottom: 10,
        marginHorizontal: 27,
        paddingHorizontal: 9
    },
    loading: {
        alignContent: 'center',
        textAlign: 'center',
        height: '100%',
        justifyContent: 'center',
        width: '100%'
    }
})

export default Home;
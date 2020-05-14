import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DataWrapper from '../components/DataWrapper';
import AnimalsApi from '../api/Animals';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animal: this.props.route.params.animal
        }
    }

    save = async () => {
        try {
            await AnimalsApi.editAnimal(this.state.animal);
            this.props.navigation.pop();
            this.props.route.params.updateAnimalInList(this.state.animal);
        } catch (error) {
            console.log(error);
        }
    }

    delete = async () => {
        try {
            await AnimalsApi.deleteAnimal(this.state.animal.id);
            this.props.navigation.pop();
            this.props.route.params.removeAnimalFromList(this.state.animal.id);
        } catch (error) {
            error => console.log(error);
        }
    }

    updateData = (param, value) => {
        let updatedAnimal = this.state.animal;
        updatedAnimal[param] = value;
        this.setState({ animal: updatedAnimal });
    }

    render() {
        return (
            <View style={styles.profile}>
                <DataWrapper
                    title={'Nome'}
                    data={this.state.animal.nome}
                    param={'nome'}
                    handleUpdate={this.updateData} />
                <DataWrapper
                    title={'Tipo'}
                    data={this.state.animal.tipoAnimal}
                    param={'tipoAnimal'}
                    handleUpdate={this.updateData} />
                <DataWrapper
                    title={'Localização'}
                    data={this.state.animal.localizacao}
                    param={'localizacao'}
                    handleUpdate={this.updateData} />
                <DataWrapper
                    title={'Raça'}
                    data={this.state.animal.raca}
                    param={'raca'}
                    handleUpdate={this.updateData} />
                <DataWrapper
                    title={'Código de Rastreamento'}
                    data={this.state.animal.codigoRastreamento}
                    param={'codigoRastreamento'}
                    handleUpdate={this.updateData} />

                <Button title='Salvar' onPress={this.save} />
                <Button title='Deletar' color='red' onPress={this.delete} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    profile: {
        margin: 20
    }
});

export default Profile;
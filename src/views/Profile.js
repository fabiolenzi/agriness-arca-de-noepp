import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DataWrapper from '../components/DataWrapper';

const Profile = ({ route, navigation }) => {

    const [animal, setAnimal] = useState(route.params.animal);

    const save = () => {
        console.log(animal);
    };

    const updateData = (param, value) => {
        let updatedAnimal = animal;
        updatedAnimal[param] = value;
        setAnimal(updatedAnimal);
    };

    return (
        <View style={styles.profile}>
            <DataWrapper title={'Nome'} data={animal.nome} param={'nome'} handleUpdate={updateData} />
            <DataWrapper title={'Tipo'} data={animal.tipoAnimal} />
            <DataWrapper title={'Localização'} data={animal.localizacao} />
            <DataWrapper title={'Nascimento'} data={animal.dataNascimento} />
            <DataWrapper title={'Entrada'} data={animal.entradaPlantel} />
            <DataWrapper title={'Peso'} data={animal.pesoCompra} />
            <DataWrapper title={'Raça'} data={animal.raca} />
            <DataWrapper title={'Código de Rastreamento'} data={animal.codigoRastreamento} />
            <DataWrapper title={'Fase'} data={animal.faseProducao.sigla} />
            <DataWrapper title={'Tipo de Granja'} data={animal.tipoGranja.sigla} />

            <Button title='Salvar' onPress={save} />
        </View>
    );
};

const styles = StyleSheet.create({
    profile: {
        margin: 20
    }
});

export default Profile;
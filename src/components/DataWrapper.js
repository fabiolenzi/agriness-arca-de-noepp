import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();


const DataWrapper = ({ title, data, param, handleUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, onChangeText] = useState(data);

    const openEditor = () => {
        setIsEditing(true);
    };

    const cancelEditor = () => {
        setIsEditing(false);
    };

    const updateValue = () => {
        handleUpdate(param, value);
        setIsEditing(false);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {isEditing
                    ? <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        autoFocus={true}
                    />
                    : <Text style={styles.data}>{value}</Text>
                }
            </View>
            <View style={styles.buttons}>
            {isEditing
                ? 
                <Fragment>
                    <Icon name='check' onPress={updateValue} size={26} />
                    <Icon name='cross' onPress={cancelEditor} size={30} />
                </Fragment>
                : <Icon name='edit' onPress={openEditor} size={22} />
            }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    content: {
        width: '75%'
    },
    buttons: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        color: 'gray',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    data: {
        fontSize: 16
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 30
    }
});

export default DataWrapper;
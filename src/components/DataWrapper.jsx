import React, { Fragment } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();

class DataWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            value: this.props.data,
            tempValue: this.props.data
        }
    }

    onChangeText = (text) => {
        this.setState({ tempValue: text });
    }

    openEditor = () => {
        this.setState({ isEditing: true });
    }

    cancelEditor = () => {
        this.setState({
            isEditing: false,
            tempValue: this.state.value
        });
    }

    updateValue = () => {
        this.setState({
            isEditing: false,
            value: this.state.tempValue
        });
        this.props.handleUpdate(this.props.param, this.state.tempValue);
    }

    render() {
        return (
            <View style={styles.wrapper} >
                <View style={styles.content}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    {this.state.isEditing
                        ? <TextInput
                            style={styles.input}
                            onChangeText={text => this.onChangeText(text)}
                            value={this.state.tempValue}
                            autoFocus={true}
                        />
                        : <Text style={styles.data}>{this.state.value}</Text>
                    }
                </View>
                <View style={styles.buttons}>
                    {this.state.isEditing
                        ?
                        <Fragment>
                            <Icon name='check' onPress={this.updateValue} size={26} />
                            <Icon name='cross' onPress={this.cancelEditor} size={30} />
                        </Fragment>
                        : <Icon name='edit' onPress={this.openEditor} size={22} />
                    }
                </View>
            </View>
        );
    }
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
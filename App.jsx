import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/views/Home';
import Profile from './src/views/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Arca de Noepp' }} />
          <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

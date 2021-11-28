import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavBar from './stackNavBar.navigations';
import {Provider} from 'react-redux';
import {store} from '../redux';
import Pages from '../pages';

const Stack = createStackNavigator();

class Navigator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Nav"
              component={StackNavBar}
              options={{
                headerStyle: {
                  shadowOpacity: 0,
                  elevation: 0,
                },
                headerTitle: 'PRAKTIKUM MDP',
                headerShown: null,
              }}
            />
            <Stack.Screen
              name="HomeDetailPage"
              component={Pages.HomeDetailPages}
              options={{
                headerStyle: {
                  shadowOpacity: 0,
                  elevation: 0,
                },
                headerTitle: 'PRAKTIKUM MDP',
                headerShown: null,
              }}
            />
            <Stack.Screen
              name="CostDetailPage"
              component={Pages.CostDetailPages}
              options={{
                headerStyle: {
                  shadowOpacity: 0,
                  elevation: 0,
                },
                headerTitle: 'PRAKTIKUM MDP',
                headerShown: null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default Navigator;

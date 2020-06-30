import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createCollapsibleStack} from 'react-navigation-collapsible';

import MainPage from '../pages/MainPage';
import BookPage from '../pages/BookPage';
const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#FFF'},
    }}>
    {createCollapsibleStack(
      <App.Screen
        options={{
          title: 'Books',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
          },
          headerStyle: {
            elevation: 0,
            backgroundColor: '#fff',
          },
        }}
        name="MainPage"
        component={MainPage}
      />,
    )}
    {createCollapsibleStack(
      <App.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
          },
          headerStyle: {
            elevation: 0,
            backgroundColor: '#fff',
          },
        }}
        name="BookPage"
        component={BookPage}
      />,
    )}
  </App.Navigator>
);

export default AppRoutes;

import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createCollapsibleStack} from 'react-navigation-collapsible';

import MainPage from '../pages/MainPage';
import BookPage from '../pages/BookPage';
import PrayList from '../pages/PrayList';
import {translate} from '../locales';
const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      cardStyle: {backgroundColor: '#FFF'},
    }}>
    {createCollapsibleStack(
      <App.Screen
        options={{
          title: translate('navigation.books'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        name="MainPage"
        component={MainPage}
      />,
      {
        elevation: 1,
      },
    )}
    {createCollapsibleStack(
      <App.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        name="BookPage"
        component={BookPage}
      />,
      {
        elevation: 1,
      },
    )}
    {createCollapsibleStack(
      <App.Screen
        options={{
          title: translate('navigation.pray_list'),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        name="PrayList"
        component={PrayList}
      />,
      {
        elevation: 1,
      },
    )}
  </App.Navigator>
);

export default AppRoutes;

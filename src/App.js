import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppRoutes from './routes/AppRoutes';
import {YellowBox} from 'react-native';
import AppProvider from './hooks';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="#fff"
        />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

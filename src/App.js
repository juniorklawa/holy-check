import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AppRoutes from './routes/AppRoutes';
import { YellowBox } from 'react-native';
import AppProvider from './hooks';
import SplashScreen from 'react-native-splash-screen';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" translucent backgroundColor="#fff" />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

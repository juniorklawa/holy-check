import React from 'react';
import {ProgressProvider} from './progressProvider';

const AppProvider = ({children}) => (
  <ProgressProvider>{children}</ProgressProvider>
);

export default AppProvider;

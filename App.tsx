import { AuthProvider } from '@contexts/AuthContext/auth.context';
import Main from '@navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;

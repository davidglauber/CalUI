import React from 'react';
import MainScreen from './src/main';
import { DigitProvider } from './src/providers/digit';

export default function App() {
  return (
    <DigitProvider>
      <MainScreen/>
    </DigitProvider>
  );
}

//testing pull request (PR) with merge
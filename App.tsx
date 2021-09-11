import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Login } from './src/pages/Login';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" translucent={false} />
      <Login />
    </>
  );
}

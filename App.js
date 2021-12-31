import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProductsHome from './src/Components/ProductsHome';



export default function App() {
  return (
    <NavigationContainer>
      <ProductsHome/>
      </NavigationContainer>
  );
}




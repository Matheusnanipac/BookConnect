
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet } from 'react-native';


import { Routers} from './routes';


export default function App() {
  return (
    <Routers/>
    
  );
}

const style= StyleSheet.create({
  container: {
    flex: 1,
}
})

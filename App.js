import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, Image } from 'react-native';
import {styles} from './AppStyle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61dafb" barStyle="dark-content"/>
      <Image style={styles.imagens}
      source={require('./assets/astro.jpg')}
      />
      <Text style={styles.texto}>Esse é o pequeno passo para o homem, 
      mas um gigantesco salto para a humanidade</Text>
      
    </SafeAreaView>
  );
}



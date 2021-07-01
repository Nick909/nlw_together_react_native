import React from 'react';
import { 
  Text, 
  View, 
  Image,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';


import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/Buttonicon';

export function SignIn () {
  const navigation = useNavigation();

  const handleSingIn = () => {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>

        <Image 
          source={IllustrationImg} 
          style={styles.image}
          resizeMode='stretch'  
        />

        <View style={styles.content} >
          <Text style={styles.title} >
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle} >
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos 
          </Text>

          <ButtonIcon 
            title='Entrar com Discord' 
            onPress={handleSingIn}
          />


        </View>
      </View>
    </Background>
  );
}


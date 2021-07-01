import React from 'react';
import { ImageBackground, Text } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { theme } from '../../global/styles/themes';
import BannerImg from '../../assets/banner.png';
import { styles } from './styles';


export function AppointmentDetails () {
  
  return (
    <Background>
      <Header 
        title='Details'
        action={
          <BorderlessButton>
            <Fontisto 
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <Text style={styles.title}>
          Lendarios
        </Text>

        <Text style={styles.subtitle}>
          suadfklafkldslf çajsdfççsadjfsdçlkfjklasdflçajsjdfasdkfaçsdkfçasdklaflçsdf lasdfldsf ladsfj
        </Text>

      </ImageBackground>
      
    </Background>
  );
}
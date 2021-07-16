import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { theme } from '../../global/styles/themes';
import BannerImg from '../../assets/banner.png';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ButtonIcon } from '../../components/Buttonicon';




export function AppointmentDetails () {

  const members  = [
    {
      id: '1',
      userName: 'Nicholas',
      avatar_url: 'https://github.com/Nick909.png',
      status: 'online',
    },
    {
      id: '2',
      userName: 'Nicholas',
      avatar_url: 'https://github.com/Nick909.png',
      status: 'offline',
    },
  ]
  
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
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendarios
          </Text>

          <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, habitant at ornare eget eu bibendum convallis efficitur, pulvinar pharetra tincidunt quisque feugiat purus.
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title='Jogador 1'
        subtitle='total 3'
      />

       <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered /> }
        style={styles.members}
       /> 
      <View style={styles.footer}>
        <ButtonIcon title='Entrar no Jogo' />
      </View>

    </Background>
  );
}
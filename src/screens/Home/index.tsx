import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text} from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './style';


export function Home () {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const apointment = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'lendários',
        icon: 'null',
        owner: false,
      },
      category: '1',
      date: '22/06 ás 28:40h',
      descripition: 'É hoje que vamos chegar ao chanllege sem perder uma partida no md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'lendários',
        icon: 'null',
        owner: true,
      },
      category: '1',
      date: '22/06 ás 28:40h',
      descripition: 'É hoje que vamos chegar ao chanllege sem perder uma partida no md10',
    },
  ]

  function handlerCategorySelect  (categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handlerAppointmentDetails () {
    navigation.navigate('AppointmentDetails');
  }

  return (
    <Background>
      <View >
        <View style={styles.header}>
          <Profile />
          <ButtonAdd /> 
        </View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handlerCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader 
            title='Partidas Agendadas'
            subtitle='Total 6'
          />

          <FlatList 
            data={apointment}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={ item }
                onPress={handlerAppointmentDetails} 
              />
            )}
            
            ItemSeparatorComponent={() => <ListDivider /> }
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  );
}
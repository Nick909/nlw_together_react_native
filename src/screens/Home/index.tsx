import React, { useCallback, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, FlatList, Text} from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Load } from '../../components/Load';


import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../config/database';


export function Home () {
  const [ category, setCategory ] = useState('');
  const [ appointment, setAppointment ] = useState<AppointmentProps[]>([]);
  const [ loadding, setLoadding ] = useState(true);

  const navigation = useNavigation();

  
  function handlerAppointmentDetails () {
    navigation.navigate('AppointmentDetails');
  }
  
  function handlerAppointmentCreate () {
    navigation.navigate('AppointmentCreate');
  }
  
  function handlerCategorySelect  (categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  async function loadAppointment () {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if ( category ) {
      setAppointment(storage.filter(item => item.category === category));
    } else {
      setAppointment(storage);
    }

    setLoadding(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointment();
  }, [] ))

  return (
    <Background>
      <View >
        <View style={styles.header}>
          <Profile />
          <ButtonAdd  onPress={handlerAppointmentCreate}/> 
        </View>

        <CategorySelect 
          categorySelected={category}
          setCategory={handlerCategorySelect}
        />
      </View>

      {
        loadding? <Load /> :
        <>
          <ListHeader 
            title='Partidas Agendadas'
            subtitle='Total 6'
          />

          <FlatList 
            data={appointment}
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
        </>
      }
    </Background>
  );
}
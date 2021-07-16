import React, { useState } from 'react';

import { 
  Text, 
  View, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from  'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';

import { COLLECTION_APPOINTMENTS } from '../../config/database';
import { Guilds } from '../Guilds';

import { CategorySelect } from '../../components/CategorySelect';
import { Background } from '../../components/Background';
import { SmallInput } from '../../components/SmallInput';
import { GuildIcon } from '../../components/GuildIcon';
import { ModalView } from '../../components/ModalView'
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/core';


export function AppointmentCreate () {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  
  const [ day, setDay ] = useState('');  
  const [ month, setMonth ] = useState('');  
  const [ hour, setHour ] = useState('');  
  const [ minute, setMinute ] = useState('');
  const [ description, setDescription ] = useState('');

  const navigation = useNavigation();

  function handleOpenGuilds () {
    setOpenGuildsModal(true);
  };

  function handleCloseGuilds () {
    setOpenGuildsModal(false);
  };
  
  function handleGuildSelect (guildSelect: GuildProps ) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  };

  function handlerCategorySelect  (categoryId: string) {
    setCategory(categoryId);
  };

  async function handleSave () {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.goBack();

  };
  

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  
    >

      <Background>
        <ScrollView>

          <Header 
            title='Agenda Partida'
      
          />

          <Text 
            style={[styles.label, 
              {
                marginLeft: 24,
                marginTop: 36,
                marginBottom: 18,
              }
            ]}
          >
            Categoria
          </Text>

          <CategorySelect 
            hasChekedBox
            setCategory={handlerCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>


            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon ? 
                    <GuildIcon 
                      guildId={guild.id} 
                      iconId={guild.icon}
                    /> 
                  : <View style={styles.image} />
                }
                

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                   {guild.name ? guild.name : 'Selecione um Sevidor'}
                  </Text>
                </View>

                <Feather 
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput 
                    keyboardType='numeric' 
                    onChangeText={setDay}
                    maxLength={2}

                  />
                  
                  <Text style={styles.divider}>
                    /
                  </Text>

                  <SmallInput 
                    keyboardType='numeric' 
                    onChangeText={setMonth}
                    maxLength={2}

                  />
                </View>

              </View>

              <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput 
                    keyboardType='numeric' 
                    maxLength={2}
                    onChangeText={setHour}
                    
                  />
                  
                  <Text style={styles.divider}>
                    :
                  </Text>

                  <SmallInput 
                    keyboardType='numeric' 
                    maxLength={2}
                    onChangeText={setMinute}

                  />
                </View>

              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12}]}>

              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimits}>
                max 100 caracteres
              </Text>
            </View>

            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}

            />
            <View
              style={styles.footer}
            >
              <Button 
                title='Agenda'
                onPress={handleSave}
              /> 
            </View>

          </View>
        </ScrollView>
        <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds} >
          <Guilds handleGuildSelected={handleGuildSelect} />
        </ModalView>
      </Background>
    </KeyboardAvoidingView>
  );
};

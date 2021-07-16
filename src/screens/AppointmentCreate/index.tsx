import React, { useState } from 'react';

import { 
  Text, 
  View, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { RectButton } from  'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect';
import { Background } from '../../components/Background';
import { SmallInput } from '../../components/SmallInput';
import { ModalView } from '../../components/ModalView'
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { GuildIcon } from '../../components/GuildIcon';


export function AppointmentCreate () {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds () {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds () {
    setOpenGuildsModal(false);
  }
  
  function handleGuildSelect (guildSelect: GuildProps ) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handlerCategorySelect  (categoryId: string) {
    setCategory(categoryId);
  }

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
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                

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
                    maxLength={2}
                  />
                  
                  <Text style={styles.divider}>
                    /
                  </Text>

                  <SmallInput 
                    keyboardType='numeric' 
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
                  />
                  
                  <Text style={styles.divider}>
                    :
                  </Text>

                  <SmallInput 
                    keyboardType='numeric' 
                    maxLength={2}
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
            />
            <View
              style={styles.footer}
            >
              <Button 
                title='Agenda'
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
}
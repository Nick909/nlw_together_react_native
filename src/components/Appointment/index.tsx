import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';

import PlayerSvg from  '../../assets/player.svg';
import CalendarSvg from  '../../assets/calendar.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/themes';

export type GuildProps = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  descripition: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}


export function Appointment ({ data, ...rest }: Props) {
  const [ category ] =  categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on} = theme.colors;

  return (
    <RectButton  {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>
              <View style={styles.dateInfo}>
                <CalendarSvg  fill={owner? primary : on}/>

                <Text style={styles.date}>
                  { data.date }
                </Text>

              </View>

            
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner? primary : on}/>

              <Text 
                style={[
                  styles.player,
                  {color: owner? primary : on}
                ]}
              >
                {owner ? 'Anfitrião' : 'visitante'}
              </Text>
            </View>
          </View>

        </View>
      </View>

    </RectButton>
  );
}
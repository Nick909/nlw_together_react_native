import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Text,
  View,
  Image
} from 'react-native';

import DiscordIcon from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  // title?: string;
}

export function ButtonIcon ({title, ...rest}: Props) {
  return (
     <RectButton style={styles.container} {...rest}>
       <View style={styles.wrapper}>
        <Image 
          source={DiscordIcon}
          style={styles.icon}
        />
       </View>
        <Text style={styles.title}>
          {title}
        </Text>
     </RectButton>
  );
}
import React from 'react';
import { Image } from 'react-native';


import { styles } from './styles';

import DiscordSvg from '../../assets/discord.svg';


export function GuildIcon () {
  
  return <DiscordSvg 
    style={styles.image} 
    width={63}
    height={67}
  />;
  
  
    // <Image 
    //   style={styles.image} 
    //   source={uri}
    //   resizeMode='cover'
    // />
    
}


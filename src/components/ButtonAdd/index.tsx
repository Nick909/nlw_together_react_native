
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';
import { MaterialCommunityIcons } from  '@expo/vector-icons';
import { theme } from '../../global/styles/themes';


export function ButtonAdd ({...rest}: RectButtonProps) {
  return (
     <RectButton style={styles.container} {...rest}>
       <MaterialCommunityIcons 
          name={'plus'}
          size={24}
          color={theme.colors.heading}
       />


     </RectButton>
  );
}


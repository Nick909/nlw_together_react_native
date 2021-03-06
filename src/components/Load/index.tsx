import React from 'react';

import {
  View,
  ActivityIndicator,
  ActivityIndicatorBase,
} from 'react-native';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';

export function Load (){
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size='large'
        color={theme.colors.primary}
      />
    </View>
  );
}
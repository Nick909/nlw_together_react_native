import React, { useState } from "react";

import { View, FlatList }  from  'react-native';

import { styles } from './styles';

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";
import { useEffect } from "react";


type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds ({handleGuildSelected}: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]); 
  const [loadding, setloadding] = useState(true);


  useEffect (() => {
    fetchGuilds();
  }, []);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');
    
    setGuilds(response.data);
    setloadding(false);
  }

  return (
    <View style={styles.container}>
      { 
        loadding? <Load /> :
        <FlatList 
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Guild 
              data={item} 
              onPress={() => handleGuildSelected(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCentered/>}
          ListHeaderComponent={() => <ListDivider isCentered/>}
          contentContainerStyle={{paddingBottom: 68, paddingTop: 103 }}
          style={styles.guilds}
        />
      }
    </View>
  );
}






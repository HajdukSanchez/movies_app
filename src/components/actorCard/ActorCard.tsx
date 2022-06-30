import React from 'react';
import { View, Text, Image } from 'react-native';

import { Cast } from '../../common/interface/credits.interface';
import { styles } from './ActorCard.style';
import { getImageURI } from '../../common/helpers/image/image.helper';

interface ActorCardProps {
  actor: Cast;
}

const ActorCard = ({ actor: { name, profile_path, character } }: ActorCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {profile_path && <Image style={styles.image} source={{ uri: getImageURI(profile_path) }} />}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.character}>{character}</Text>
      </View>
    </View>
  );
};

export { ActorCard };

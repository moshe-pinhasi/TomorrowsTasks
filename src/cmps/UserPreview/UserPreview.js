import React from 'react'
import {View, Text, Image} from 'react-native'

import styles from './styles';

const UserPreview = () => {
  return (
    <View style={styles.userPreview}>
      <View style={styles.userDetails}>
        <Text style={styles.title}>Hello! Moshe</Text>
        <Text style={styles.subtitle}>There are 4 important things...</Text>
      </View>
      <View style={styles.userImage}>
        <Image
            style={styles.avatar}
            source={require('../../assets/images/avatar.jpg')}
          />
      </View>
    </View>
  );
}

export default UserPreview
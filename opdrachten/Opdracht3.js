import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Opdracht3() {
/*
Voor deze opdracht krijg je de ruimte om zelf iets te maken. Je kunt hiervoor de componenten gebruiken
die we de afgelopen lessen hebben gebruikt, of je gaat zelf op zoek naar iets interessants.
Check https://docs.expo.io/versions/v39.0.0/config/app/ voor componenten die je kunt gebruiken in Expo!
*/
  return (
      <View style={styles.mainContainer}>
        <Text>Opdracht 3: Do it yourself!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
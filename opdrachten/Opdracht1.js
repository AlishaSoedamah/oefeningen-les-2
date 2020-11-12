import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Opdracht1() {
  /* 
  Tijdens de vorige les heb je geleerd hoe je Text en View components op je scherm laat zien.
  Deze les starten we met het tonen van een afbeelding met het Image component. Bij het tonen van een
  Image component moeten we een height en een width tonen, anders zie je deze niet op het scherm.
  OPDRACHT A:
  Op regel 2 zie je dat we de Text, View en StyleSheet components importeren. Voeg hier Image aan toe.
  OPDRACHT B: 
  Importeer ROCA_logoo.png. Dit logo zit in de folder assets/images-opdracht-1/
  *TIP: Met '../' navigeer je een map omhoog bij het importeren*
  */
    return (
      <View style={styles.mainContainer}>
        {/*
        OPDRACHT C:
        Maak een nieuw Image component
        Hieronder een voorbeeld:
        <Image source={'logo van regel 3'} style={{ width: 305, height: 159 }} />
        OPDRACHT D: 
        Verplaats de styling van de image naar de StyleSheet (zoals bij de mainContainer)
        OPDRACHT E:
        Plaats een nieuwe afbeelding in de assets/images-opdracht-1/ folder,
        Toon deze afbeelding ook op het scherm met een andere width en height
        */}
        <Text>Opdracht 1: Afbeeldingen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
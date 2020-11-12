import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function Opdracht2() {
    /* 
      Met het TouchableOpacity kun je andere components klikbaar maken en daar een functie aanhangen.
      In het voorbeeld hieronder zie je hoe je een alartbox kunt openen door te klikken op 'Klik Mij!'
      Uitleg: TouchableOpacity is ongeveer hetzelfde als een View, het grote verschil in 
      tegenstelling tot een normale View is dat TouchableOpacity klikbaar is. 
      Om het klikbare te laten werken heb je de onPress prop nodig. In het voorbeeld zie je hoe 
      je een functie aan onPress hangt.
    */
   let pressScore = 0
   let greenPressScore = 0
   let redPressScore = 0
   let addPress = () => {
    pressScore++
    alert(`Je hebt al ${pressScore} keer geklikt!`)
   }
   let addGreenPress = () => {
    greenPressScore++
    alert(`Je hebt al ${greenPressScore} keer op groen geklikt!`)
   }
    return (
      <View style={styles.mainContainer}>
        <Text>Opdracht 2: onPress()</Text>
        <TouchableOpacity
        onPress={() => addPress()}
        style={styles.alertButton}>
        <Text style={styles.buttonText}>Klik mij!</Text>
      </TouchableOpacity>
      {/*
      OPDRACHT A:
      Maak een rood en groen TouchableOpacity component. Als je op groen drukt is de onPress die je uitvoert
      addGreenPress(). Druk je op rood voer je addRedPress() uit. Let op! de functie addRedPress() 
      moet nog worden gemaakt!
      TIP: Kopieer de addGreenPress() en maak hier addRedPress() van (vergeet niet de score aan te passen!)
      OPDRACHT B:
      Plaats een Text component in de TouchableOpacity components. Hier mag je plaatsen wat je wilt!
      OPDRACHT C:
      Maak nog een TouchableOpacity component zonder styling. Dit component heeft als onPress de addPress() 
      van het voorbeeld. Plaats een <Image> in dit component. Werkt het klikken nu nog steeds?
      */}
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
    alertButton: {
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    }
  });
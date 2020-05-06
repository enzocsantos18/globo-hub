import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';

// import { Container } from './styles';

export default function Story({source, text}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}
      >
          <Text style={styles.text}>{text} </Text>

        <Image style={styles.image} source={source}></Image>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000'
    },
    text: {
    
      fontSize: 28,
      marginTop: 120,
      padding: 50,
      fontWeight: "bold",
      color: 'white',
      zIndex: 2,
    },
    image: {
      opacity: 0.4,
      ...StyleSheet.absoluteFillObject,
      zIndex: -5,
      width: null,
      height: null
    }
})
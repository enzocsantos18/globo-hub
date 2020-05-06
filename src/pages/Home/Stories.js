import React, {useMemo, useEffect, useState} from 'react';
import { View,Animated, Image, StyleSheet, ScrollView, Dimensions, Text} from 'react-native';
import Story from './Story'
import api from '../../services/api.js'

// import { Container } from './styles';

const stories = [
  {
    id: 1,
    text: 'Bolsonaro diz que Moro propôs aceitar demissão de diretor da PF se fosse indicado ministro do STF',
    source: require('../../../assets/1.jpg')
  },
  {
    id: 2,
    text: 'Moro exibe troca de mensagens em que Bolsonaro cobra mudança no comando da PF',
    source: require('../../../assets/2.jpg')
  },
  {
    id: 3,
    text: 'Neymar é acusado de furar quarentena',
    source: require('../../../assets/3.jpg')
  },
]

const {width} = Dimensions.get('window')
const perspective = 100
export default function Stories() {

  const [conteudo, setConteudo] = useState({});

  // useEffect(async () =>{

  //   const response = await api.get('conteudo&email=rebecalaviniabarbara@sercoti.com.br');


  // }, [])


  const x = new Animated.Value(0)
  const storyAnimation = (index) =>{
    const offset = index * width
    const inputRange = [offset - width, offset + width]

    const translateX1 = x.interpolate({
      inputRange, 
      outputRange: [width/2,-width/2],
      extrapolate: 'clamp'
    })

    const translateX2 = x.interpolate({
      inputRange, 
      outputRange: [width/2,-width/2],
      extrapolate: 'clamp'
    })

    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        {perspective},
        {translateX: translateX1},
     
        {translateX: translateX2},

      ]
    }
  }

  const feed = useMemo(() =>{
    return stories.map((story, index) =>{
      return (
        <Animated.View  style={storyAnimation(index)} key={index}>
          <Story {...story}/>
        </Animated.View>
      )
    })
  }, [stories])
  return (
   <View style={styles.container}>
     {feed}
     <Animated.ScrollView 
     style={StyleSheet.absoluteFillObject} 
     horizontal
     showsHorizontalScrollIndicator={false}
     decelerationRate="normal"
     pagingEnabled
     contentContainerStyle={{ width: stories.length * width}}
    //  snapToInterval={width}
     onScroll={Animated.event([{
       nativeEvent:{
         contentOffset: {x}
       }
     }],{useNativeDriver: true})}
     >
     </Animated.ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

Stories.defaultProps = {
  stories: []
}


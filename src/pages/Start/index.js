import React from 'react';
import { Text, TouchableHighlight, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { Container, InfosArea, ButtonsArea,Title, SubTitle, Message, BtnRegister, BtnLogin, TextLogin, TextRegister, BtnNoRegister, TextNoRegister } from './styles';
import image from '../../../assets/bola.png'
import logo from '../../../assets/logo.png'




export default function Start() {
  const navigation = useNavigation()
  function navigateToRegister(){
    navigation.navigate('Register')
  }
  function navigateToLogin(){
    navigation.navigate('Login')
  }
  return (
  <>
    <Image
        style={{
          backgroundColor: '#fff',
          flex: 1,
          position: 'absolute',
          top: '-30%',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={image}
    />
  <Container>
    <InfosArea>
          <Image
          style={{
           height: 100,
           width: 100,
          }}
          source={logo}
        />
        <Title>Globo Hub</Title>
        <SubTitle>Bem-vindo</SubTitle>
        <Message>Aproveite para ver as notícias do dia e ainda ganhar pontos para trocar em benefícios nos produtos da Globo.</Message>
        <Message>Você pode se Cadastrar, Logar ou entrar diretamente, caso não tenha cadastro os pontos não serão creditados.</Message>
      </InfosArea>
        <ButtonsArea>
          <BtnRegister onPress={navigateToRegister}><TextRegister>Cadastrar</TextRegister></BtnRegister>
          <BtnLogin onPress={navigateToLogin}><TextLogin>Logar</TextLogin></BtnLogin>
          <BtnNoRegister><TextNoRegister>Entrar sem cadastro</TextNoRegister></BtnNoRegister>
        </ButtonsArea>
      </Container>
      </>
  );
}

import React from 'react';
import {Image,Picker, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { Container, SubTitle,InfosArea, InputArea, Message, Input, FormGroup, Selector, BtnRegister, TextRegister, BtnLogin, TextLogin, BoldLogin} from './styles';



import image from '../../../assets/bola.png'
import logo from '../../../assets/logo.png'




export default function Register() {
  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Stories')
  }

  return (
    <ScrollView>
      <Image
        style={{
          backgroundColor: '#fff',
          flex: 1,
          position: 'absolute',
          top: '-65%',
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
            height: 64,
            width: 64,
            }}
            source={logo}
          />
          <SubTitle>Login</SubTitle>
        </InfosArea>
        <InputArea>
          <Input 
            placeholderTextColor="#C2C2C2" 
            placeholder="E-mail"
            keyboardType="email-address"
            selectionColor='#26ADE4'
            editable
          />
          <Input 
            placeholderTextColor="#C2C2C2" 
            placeholder="Senha"
            editable
            secureTextEntry={true}
            selectionColor='#26ADE4'

            maxLength={40}
          />
          <BtnRegister onPress={navigateToHome}><TextRegister >Entrar</TextRegister></BtnRegister>
        </InputArea>
      </Container>
  </ScrollView>
  );
}

import React from 'react';
import {Image,Picker, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { Container, SubTitle,InfosArea, InputArea, Message, Input, FormGroup, Selector, BtnRegister, TextRegister, BtnLogin, TextLogin, BoldLogin} from './styles';



import image from '../../../assets/bola.png'
import logo from '../../../assets/logo.png'




export default function Register() {
  const navigation = useNavigation();

  function navigateToFavorites(){
    navigation.navigate('Favorites')
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
          <Message>Ganhe pontos com o cadastro.</Message>
          <SubTitle>Cadastrar</SubTitle>
        </InfosArea>
        <InputArea>
          <Input 
            placeholderTextColor="#C2C2C2" 
            placeholder="Nome"
            editable
            selectionColor='#26ADE4'
            maxLength={80}
          />
          <Input 
            placeholderTextColor="#C2C2C2" 
            placeholder="E-mail"
            keyboardType="email-address"
            selectionColor='#26ADE4'
            editable
          />
          {/* <FormGroup>
            <View style={{borderWidth:1, padding: 2, borderColor: '#C2C2C2',width: "49%", borderRadius: 4,}}>
              <Selector 
                placeholderTextColor="#C2C2C2" 
                style={
                  {
                    height: 40,
                    width: '100%',
                  }
                }
                editable
                maxLength={40}
              >
                <Picker.Item label="Gênero" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Selector>
            </View>
            <Input 
              placeholderTextColor="#C2C2C2" 
              placeholder="Data de nascimento"
              editable
              selectionColor='#26ADE4'

              keyboardType="numeric"

              style={
                {
                  width: '49%',
                }
              }
              maxLength={40}
            />
          </FormGroup> */}

          <Input 
            placeholderTextColor="#C2C2C2" 
            placeholder="Senha"
            editable
            secureTextEntry={true}
            selectionColor='#26ADE4'

            maxLength={40}
          />
          <Input 
          placeholderTextColor="#C2C2C2" 
          placeholder="Confirmar Senha"
          editable
          selectionColor='#26ADE4'

          secureTextEntry={true}
          maxLength={40}
          />    
          <BtnRegister onPress={navigateToFavorites}><TextRegister >Cadastrar</TextRegister></BtnRegister>
          <BtnLogin><TextLogin>Já possui conta?</TextLogin><BoldLogin>Clique aqui</BoldLogin></BtnLogin>
        </InputArea>
      </Container>
  </ScrollView>
  );
}

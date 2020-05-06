import React from 'react';
import { Text, TouchableHighlight, Image, } from 'react-native';
import { Container, SubTitle, InfosArea, InputArea, ButtonArea, OptionArea, Message, Option, OptionText, BtnReady, TextReady, BtnSkip, TextSkip } from './styles';



import image from '../../../assets/bola.png'
import logo from '../../../assets/logo.png'




export default function Favorites() {

  const topics = [
    'Astronomia', 'Cultura e entretenimento', 'Desastres e acidentes', 'Economia e negócios', 'Educação',
  ]

  return (
    <>
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
          <Message>Marque 1 ou mais itens.</Message>
          <SubTitle>Escolha seus interesses</SubTitle>
        </InfosArea>
        <InputArea>
          <OptionArea
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexDirection:'row', flexWrap: 'wrap', flex: 1,}}
          >
            {topics.map(topic => (
              <Option key={topic}><OptionText>{topic}</OptionText></Option>
            ))}
          </OptionArea>
          <ButtonArea>
            <BtnSkip><TextSkip>Pular</TextSkip></BtnSkip>
            <BtnReady><TextReady>Pronto</TextReady></BtnReady>
          </ButtonArea>
        </InputArea>
      </Container>
    </>
  );
}

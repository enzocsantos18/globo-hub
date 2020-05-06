import styled from 'styled-components/native'


export const Container = styled.View`
width: 100%;
height: 100%;
align-items: center;
padding: 24px;
display: flex;
`;

export const InputArea = styled.View`
  margin-top: 80px;
  width: 100%;
  flex: 1;
  display: flex;
`;
export const InfosArea = styled.View`
width: 100%;
align-items: center;
height: 25%;
justify-content: space-between;
  `;

export const SubTitle = styled.Text`
font-weight: bold;
  font-size: 24px;
  color: #FFD43E;
  text-align: center;

`;
export const Message = styled.Text`
  color: #fff;
  text-align: center;
`;

export const OptionArea = styled.ScrollView`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Option = styled.TouchableOpacity`
  border: 1px solid #9E9E9E;
  border-radius: 20px;
  padding: 5px 16px 5px 16px;
  margin-bottom: 16px;
  margin-right: 8px;
`;

export const OptionText = styled.Text`
  color: #9E9E9E;
`


export const ButtonArea = styled.View`
display: flex;
width: 100%;
flex-direction: row;
justify-content: center;
justify-content: space-between;
`

export const BtnReady = styled.TouchableOpacity`
background: #0669DE;
padding: 10px 57px 10px 57px;
border-radius: 4px;

`


export const TextReady = styled.Text`
font-weight: bold;
line-height: 16px;
color: #FFFFFF;

`

export const BtnSkip = styled.TouchableOpacity`

padding: 10px 57px 10px 57px;

`


export const TextSkip = styled.Text`
line-height: 16px;

color: rgba(0, 0, 0, 0.38);
`
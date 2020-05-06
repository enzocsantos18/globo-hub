import styled from 'styled-components/native'


export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 32px;
  align-items: center;
  /* background: #fff; */
`;
export const InfosArea = styled.View`
  flex: 1;
  align-items: center;
  width: 90%;
  /* background-color: red; */
`;
export const ButtonsArea = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-bottom:  40px;


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
  margin-bottom:  40px;
`;

export const BtnRegister = styled.TouchableHighlight`

  width: 100%;
  background: #0669DE;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 10px 5px 5px #000;

`;

export const BtnLogin = styled.TouchableHighlight`

  width: 100%;
  background: #fff;
  border: 2px solid #0669DE;
  border-radius: 4px;
  padding: 10px;
  margin: 12px 0px;


`;

export const BtnNoRegister = styled.TouchableHighlight`
  width: 100%;
`;


export const TextNoRegister = styled.Text`

color: #9E9E9E;
text-align: center;

`;


export const TextRegister = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;
export const TextLogin = styled.Text`
  color: #0669DE;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

import styled from 'styled-components/native'


export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 24px;
  display: flex;
  `;

export const InputArea = styled.View`
  margin-top: 18%;
  width: 100%;
  flex: 1;

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
  margin-bottom: 80px;
  color: #FFD43E;
  text-align: center;

`;
export const Message = styled.Text`
  color: #fff;
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #C2C2C2;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const Selector = styled.Picker`
  width: 100%;
  border: 1px solid #C2C2C2;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
 
`;
export const FormGroup = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;


export const BtnRegister = styled.TouchableHighlight`
  margin-top: 10px;

  width: 100%;
  background: #0669DE;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 10px 5px 5px #000;

`;

export const TextRegister = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;
export const BtnLogin = styled.TouchableOpacity`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextLogin = styled.Text`
  color: #00000038;
  text-align: center;
`;
export const BoldLogin = styled.Text`
  color: #00000038;
  margin-left: 3px;
  text-decoration: underline;
  font-weight: bold;
  text-align: center;
`;
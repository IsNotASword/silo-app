import React from 'react';
import { StyleSheet, Button, Text, TextInput } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'SIGO Móvil',
    headerStyle: {
      backgroundColor: '#3a42b8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <Wrapper>
        <Title>Registro en el sistema</Title>
        <InputField label="NOMBRE COMPLETO" />
        <Hr />
        <InputField label="CORREO ELECTRÓNICO" />
        <Hr />
        <InputField label="TELÉFONO" />
        <Hr />
        <Button
          title="ENVIAR"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default RegisterScreen;
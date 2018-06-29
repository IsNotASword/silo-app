import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Title from '../components/Title';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import Select from '../components/Select';
import Hr from '../components/Hr';

class PollingScreen extends React.Component {
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
    const nextPage = this.props.navigation.getParam('nextPage');
    return (
      <Wrapper>
        <Title>Apertura de casilla</Title>
        <Select
          label="TIPO DE IRREGULARIDAD"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
        />
        <Hr />
        <Select
          label="TIPO DE IRREGULARIDAD"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
        />
        <Hr />
        <Select
          label="TIPO DE IRREGULARIDAD"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
        />
        <Hr />
        <Select
          label="TIPO DE CASILLA"
          options={[
            { label: 'Básica', value: 'basica' },
            { label: 'Contigua', value: 'contigua' },
            { label: 'Extraordinaria', value: 'extraordinaria' },
            { label: 'Especial', value: 'especial' },
          ]}
        />
        <Hr />
        <InputField label="DESCRIPCIÓN DE LOS HECHOS" />
        <Hr />
        <Button
          title="Continuar"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate(nextPage)}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default PollingScreen;

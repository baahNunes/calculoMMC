import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexo: 'homem',
      idade: '',
      altura: '',
      peso: '',
      resultado: '',
    };
  }

  ShowResult() {
    const { sexo, peso, altura } = this.state;
    const alturaMetros = parseFloat(altura) / 100; // Converter altura para metros
    const pesoFloat = parseFloat(peso);

    if (sexo === 'homem' && pesoFloat && alturaMetros) {
      const imc = pesoFloat / (alturaMetros * alturaMetros);
      this.setState({ resultado: imc.toFixed(2) });
    } else {
      this.setState({ resultado: 'Preencha todos os campos corretamente.' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginVertical: 10 }}>
          Descubra qual é o seu índice de massa corporal.
        </Text>
        <Button
          onPress={() => this.setState({ sexo: 'homem' })}
          title="HOMEM"
          color="#00ffff"
        />
        <Button
          onPress={() => this.setState({ sexo: 'mulher' })}
          title="MULHER"
          color="#841584"
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="number-pad"
          onChangeText={text => this.setState({ idade: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          keyboardType="number-pad"
          onChangeText={text => this.setState({ altura: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="number-pad"
          onChangeText={text => this.setState({ peso: text })}
        />
        <Button
          onPress={() => this.ShowResult()}
          title="Calcular IMC"
          color="#0066FF"
        />
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          Resultado: {this.state.resultado}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
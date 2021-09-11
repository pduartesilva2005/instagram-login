import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import { styles } from './styles';

export function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image source={logoImg} style={styles.logo} />

          <TextInput
            placeholder="Celular, username ou e-mail"
            style={styles.input}
          />

          <TextInput placeholder="Sua senha" style={styles.input} />

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu a sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookContainer}>
            <FontAwesome5 name="facebook" size={25} color="#399fff" />
            <Text style={styles.facebookText}>Continuar como Pedro Duarte</Text>
          </TouchableOpacity>

          <View style={styles.separator}>
            <View style={styles.separatorLine}></View>
            <Text style={{ marginHorizontal: '3%' }}>OU</Text>
            <View style={styles.separatorLine}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

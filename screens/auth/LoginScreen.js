import React, { useCallback, useReducer } from 'react';
import { Alert, StyleSheet } from 'react-native';
import AuthScreenWrapper from '../../components/AuthScreenWrapper';
import Input from '../../components/Input';
import { useDispatch } from 'react-redux';
import { formReducer, FORM_INPUT_UPDATE } from './formReducer';
import { Button } from 'react-native-elements';
import { login } from '../../store/actions/auth.action';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleLogIn = () => {
    if (formState.formIsValid) {
      try {
        dispatch(login(formState.inputValues.email, formState.inputValues.password));
      } catch(err) {
        console.log(err)
      }
    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y contraseña válidos',
        [{ text: 'Ok' }]
      );
    }
  }
  
  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch]);

  return (
    <AuthScreenWrapper
      style={styles.container}
      title="INGRESAR"
      message="¿Aún no tienes cuenta?"
      buttonText="Ir al registro"
      buttonPath="Register">
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorText="Por favor ingresa un email válido"
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        errorText="Ingrese contraseña"
        required
        onInputChange={onInputChangeHandler}
      />
      <Button
        title="INGRESAR"
        onPress={handleLogIn}
        buttonStyle={styles.button}
        style={{alignItems: 'flex-end', flex: 1}}
      />
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default LoginScreen;
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },

  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },

  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end'
  },

  forgotText: {
    color: '#399fff'
  },

  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 17
  },

  facebookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%'
  },

  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15
  },

  separator: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  separatorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#efeded',
    borderRadius: 5
  },

  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%'
  },

  signUpText: {
    color: '#c4c4c4',
    paddingRight: 5,
  },

  signUpButton: {
    color: '#399fff',
    fontWeight: 'bold'
  }
});

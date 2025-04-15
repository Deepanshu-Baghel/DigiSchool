import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const FirstPage = ({ navigation }) => {
  const handleRoleSelect = (selectedRole) => {
    navigation.navigate('LoginScreen', { role: selectedRole });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Make sure the logo exists here
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to EduConnect</Text>

      <View style={styles.buttonContainer}>
        <Button title="Student" onPress={() => handleRoleSelect('student')} />
        <Button title="Teacher" onPress={() => handleRoleSelect('teacher')} />
        <Button title="Admin" onPress={() => handleRoleSelect('admin')} />
      </View>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
});

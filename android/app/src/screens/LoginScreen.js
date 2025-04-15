import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../config/firebaseConfig';
import { ref, get } from 'firebase/database';



const LoginScreen = ({ navigation, route }) => {
  const { role: initialRole } = route.params || {};
  const [role, setRole] = useState(initialRole || 'student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  const handleLogin = async () => {
    try {
      const usersRef = ref(db, 'users');
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        const users = snapshot.val();
        const foundUser = Object.values(users).find(
          user =>
            user.email === email &&
            user.password === password &&
            user.role === role
        );

        if (foundUser) {
          if (role === 'teacher') navigation.navigate('TeacherHome');
          else if (role === 'student') navigation.navigate('StudentHome');
          else navigation.navigate('AdminHome');
        } else {
          Alert.alert('Login Failed', 'Invalid credentials or role');
        }
      } else {
        Alert.alert('Login Failed', 'No users found');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Register" onPress={() => navigation.navigate('RegisterScreen')} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
});

export default LoginScreen;

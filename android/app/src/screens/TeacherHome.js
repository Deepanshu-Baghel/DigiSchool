import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TeacherHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Teacher!</Text>
      <Button title="Logout" onPress={() => navigation.replace('FirstPage')} />
    </View>
  );
};

export default TeacherHome;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

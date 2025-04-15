import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StudentHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Student!</Text>
      <Button title="Logout" onPress={() => navigation.replace('FirstPage')} />
    </View>
  );
};

export default StudentHome;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

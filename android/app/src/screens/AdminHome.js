import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AdminHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Admin!</Text>
      <Button title="Logout" onPress={() => navigation.replace('FirstPage')} />
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

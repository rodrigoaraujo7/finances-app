import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// components
import { Header } from '../../components/Header'

export const Home = () => {
  return (
    <View style={styles.container}>
        <Header />
        <Text>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

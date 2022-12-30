import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

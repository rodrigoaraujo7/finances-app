import { StyleSheet, Text, View } from 'react-native';

// components
import { Header } from '../../components/Header'
import { Balance } from '../../components/Balance';

export const Home = () => {
  return (
    <View style={styles.container}>
        <Header name="Rodrigo L. Araujo" />
        <Balance balance="15.023,00" spending="720,00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
});

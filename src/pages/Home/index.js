import { StyleSheet, Text, View, FlatList } from 'react-native';

// components
import { Header } from '../../components/Header'
import { Balance } from '../../components/Balance';
import { Movements } from '../../components/Movements';
import { Actions } from '../../components/Actions';

// data base
import { data } from '../../data';

const list = data

export const Home = () => {
  return (
    <View style={styles.container}>
        <Header name="Rodrigo L. Araujo" />
        <Balance balance="15.023,00" spending="720,00" />
        <Actions />
        <Text style={styles.title}>Last spends</Text>

        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={item => String(item.id)} // transform id number to string
          showsVerticalScrollIndicator={false} // remove vertical scroll
          renderItem={({ item }) => <Movements data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});

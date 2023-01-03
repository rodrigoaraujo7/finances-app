import { StyleSheet, Text, View, FlatList } from 'react-native';

// components
import { Header } from '../../components/Header'
import { Balance } from '../../components/Balance';
import { Movements } from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Supreme T-Shirt',
    value: '1.250,00',
    date: '17/07/2022',
    type: 0 // 0 -> spending
  },
  {
    id: 2,
    label: 'Wage',
    value: '4.850,00',
    date: '10/11/2022',
    type: 1 // 1 -> earnings
  },
  {
    id: 3,
    label: 'Mechanical Keyboard',
    value: '850,00',
    date: '19/12/2022',
    type: 0 // 0 -> spending
  }
]

export const Home = () => {
  return (
    <View style={styles.container}>
        <Header name="Rodrigo L. Araujo" />
        <Balance balance="15.023,00" spending="720,00" />
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
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});

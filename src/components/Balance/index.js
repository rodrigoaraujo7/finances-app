import {
    View, 
    Text,
    StyleSheet
} from 'react-native'

export const Balance = ({ balance, spending }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Balance</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.currentBalance}>{balance}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Spending</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.spending}>-{spending}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 22,

        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,

        borderRadius: 5,
        backgroundColor: '#fff',

        zIndex: 99,
    },
    item: {
        
    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentSymbol: {
        color: '#dadada',
        marginRight: 6,
    },
    currentBalance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    spending: {
        fontSize: 22,
        color: '#e74c3c'
    }
})
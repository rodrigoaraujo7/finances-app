import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

export const Actions = () => {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
                <View style={styles.areaButton}>
                    <AntDesign name='addfolder' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Appetizer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
                <View style={styles.areaButton}>
                    <AntDesign name='tagso' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Shopping</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
                <View style={styles.areaButton}>
                    <AntDesign name='creditcard' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Credit Card</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
                <View style={styles.areaButton}>
                    <AntDesign name='barcode' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Billet</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton} activeOpacity={0.5}>
                <View style={styles.areaButton}>
                    <AntDesign name='setting' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Account</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },
    areaButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 8
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
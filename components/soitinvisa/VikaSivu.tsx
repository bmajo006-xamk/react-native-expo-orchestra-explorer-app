import { Audio } from 'expo-av';
import {
    SafeAreaView,
    View,
} from 'react-native';
import {
    Card,
    RadioButton,
    Text,
    Button,
    IconButton
} from 'react-native-paper';
import { useContext } from 'react';
import { SoitinContext } from '../../context/SoitinContext';
import { styles } from '../../styles/stylesVisa';



const VikaSivu = () => {

    const { pelaaja, jouset_images } = useContext(SoitinContext);

    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.row}>
            <Card style={styles.card}>
                <View style={{top: 60, padding: 10, alignSelf: 'center'}}>
                    <Text style={styles.title}>Tunnistit pelissä 8/10 soittimesta. </Text>
                    <Text style={styles.title}>Hienoa {pelaaja.nimi}!</Text>
                </View>
                <Card.Cover source={jouset_images[4].img} style={{top: 40, height: 260}} />
                <Button
                    style={[styles.button, {top: 60}]}
                    labelStyle={styles.buttonLabel}
                    mode='contained'
                    buttonColor='#A68E63'
                >Pelaa uudestaan</Button>
            </Card>
            </View>
        </SafeAreaView>
    )
}
export default VikaSivu;
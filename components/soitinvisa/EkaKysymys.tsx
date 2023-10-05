import {
    SafeAreaView,
    View,
    StyleSheet
} from 'react-native';
import {
    Card,
    RadioButton,
    Text,
    Button
} from 'react-native-paper';
import { useContext, useState } from 'react';
import { SoitinContext } from '../../context/SoitinContext';
//import {styles} from '../../styles/stylesVisa';

const EkaKysymys = ({ navigation } : any) => {


    const {pelaaja, jouset_images} = useContext(SoitinContext);
    const [answer, setAnswer] = useState('');
    const rightAnswer : string = "viulu";

    const tarkista = () => {
        if (answer == rightAnswer ){
            pelaaja.pisteet += 1
        }   
        else {
            alert('Vastaus on valitettavasti väärin');
        }
    }


    const siirrySeuraavaan = () => {
        tarkista();
        navigation.navigate('Tokakysymys');
    }

    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.row}>

                <Text style={styles.title}>Tsemppiä peliin {pelaaja.nimi}!</Text>
                <Card style={styles.card}>
                    <Card.Title titleVariant="titleMedium" title="1. Mikä soitin on kuvassa?"/>
                    <Card.Cover source={jouset_images[0].img} />
                    <Card.Content style={styles.radiobuttonrow}>
                        <RadioButton.Group onValueChange={ newAnswer => setAnswer(newAnswer)} value={answer}>
                            <View>
                                <Text style={styles.answer}>sello</Text>
                                <RadioButton
                                    color="#A68E63" 
                                    value="sello"
                                />
                            </View>
                            <View>
                                <Text style={styles.answer}>alttoviulu</Text>
                                <RadioButton  
                                    color="#A68E63" 
                                    value="alttoviulu"
                                />
                            </View>
                            <View>
                                <Text style={styles.answer}>viulu</Text>
                                <RadioButton 
                                    color="#A68E63" 
                                    value="viulu"
                                />
                            </View>
                        </RadioButton.Group>
                    </Card.Content>
                        <Button
                            style={styles.button}
                            labelStyle={styles.buttonLabel}
                            mode='contained'
                            buttonColor='#A68E63'
                            onPress={siirrySeuraavaan}
                        >Siirry kysymykseen 2</Button>
                </Card>
            </View>



        </SafeAreaView>
    )
}
export default EkaKysymys;

const styles= StyleSheet.create({
    answer: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        display: 'flex',
        backgroundColor: '#151515',
        height: '100%'
    },
    row: {
        padding: 10,
        top: '15%',
        width: '100%',
        height: '80%',

    },
    card: {
        padding: 15,
        height: 550

    },
    radiobuttonrow: {
        top: 20

    },
    radiobutton: {
        

    },
    title: {
        color: "#A68E63",
        fontWeight: 'bold',
        fontSize: 30,
        bottom: 35,
        left: 5

    },
    text: {
        fontSize: 18,
        width: '78%',
        color: '#FFFFFF',
        bottom: 30,
        left: 5
    },
    button: {
        width: '75%',
        height: 60,
        justifyContent: 'center',
        top: 30

    },
    buttonLabel: {
        fontSize: 18,

    },
})
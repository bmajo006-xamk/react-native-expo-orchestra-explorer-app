import { SafeAreaView } from "react-native-safe-area-context";
import {
    StyleSheet,
    View
} from 'react-native';
import {
    Button,
    Text,
    TextInput
} from 'react-native-paper';
import { useRef, useState, useContext } from 'react';
import { SoitinContext } from "../../context/SoitinContext";

const VisaEtusivu = ({navigation } : any) => {

    const tekstikentta : React.MutableRefObject<any> = useRef();

    const {pelaaja, setPelaaja} = useContext(SoitinContext);
    const [nimi, setNimi] = useState<any>();

    const aloitaPeli = () : void => {
        setPelaaja(
            {
            nimi: nimi,
            pisteet: 0
        })
        tekstikentta.current.clear();
        navigation.navigate('Ekakysymys');

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Testaa tunnistatko kaikki soittimet</Text>
                <Text style={styles.text}>Aloita peli syöttämällä oma nimesi</Text>
                <TextInput
                    ref= {tekstikentta}
                    mode="outlined"
                    value={nimi}
                    label="Syötä nimesi"
                    outlineColor="#A68E63"
                    activeOutlineColor="#A68E63"
                    style={styles.textInput}
                    onChangeText={ (text) => {setNimi(text)}}
                    ></TextInput>
                <Button
                    mode='outlined'
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                    textColor="#000"
                    buttonColor="#A68E63"
                    dark={true}
                    onPress={aloitaPeli}
                >Aloita</Button>
            </View>
        </SafeAreaView>
    )
}
export default VisaEtusivu;

const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#151515',
        height: '100%'
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        color: "#A68E63",
        fontWeight: 'bold',
        fontSize: 25,
        bottom: 35,
        width: '78%',
        left: 5

    },
    text: {
        fontSize: 18,
        width: '78%',
        color: '#FFFFFF',
        bottom: 30,
        left: 5
    },
    textInput: {
        width: '75%',
        bottom: 20

    },
    button: {
        width: '75%',
        height: 60,
        justifyContent: 'center',

    },
    buttonLabel: {
        fontSize: 18,

    },
})


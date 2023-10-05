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
import { useContext, useState, useEffect } from 'react';
import { SoitinContext } from '../../context/SoitinContext';
import { styles } from '../../styles/stylesVisa';





const soundObject = new Audio.Sound();

//navigation.goBack();

const TokaKysymys = ({navigation} : any) => {

    
    const {pelaaja} = useContext(SoitinContext);
    const [answer, setAnswer] = useState('');
    //const rightAnswer : string = "sello";

    const { sounds } = useContext(SoitinContext);
    const source =sounds[1].url
    const [playing, setPlaying ] = useState(false);
    const [unload, setUnload] = useState<boolean>(false);


    const tarkista = () => {
        if (answer == 'sello' ){
            pelaaja.pisteet += 1
        } else {
            alert("Vastaus oli valitettavasti väärin")
        }
    }
    const siirrySeuraavaan = () => {
        tarkista();
        navigation.navigate('VikaSivu');
    }
    const playExample = async() => {
        setUnload(true);
        await soundObject.playAsync();
        //tähän pitäis saada koodi, jos on soitettu loppuun, soundi-objekti tyhjennetään
    }

    const pausePlayer = async() => {
        await soundObject.pauseAsync();
    }
    useEffect(() => {
        return unload
          ? () => {
              //console.log('Unloading Sound');
              soundObject.unloadAsync();
            }
          : undefined;
      }, [unload]);

    useEffect(() => {  
        soundObject.loadAsync(source)
        setUnload(false);
    }, []);



    return (
    <SafeAreaView style = {styles.container}>
    <View style={styles.row}>
        <Text style={styles.title}>Soittimia tunnistettu: {pelaaja.pisteet}/10, hyvä {pelaaja.nimi}!</Text>
        <Card style={styles.card}>
            <Card.Title titleVariant="titleMedium" title="2. Kuuntele esimerkki, mikä soitin?"/>
            <View style={{height: 170, justifyContent: 'center'}}>
            { (!playing) ? 
                        <IconButton
                            icon="play"
                            mode="contained"
                            iconColor="#151515"
                            containerColor="#A68E63"
                            size={70}
                            onPress={() => {
                                setPlaying(true);
                                playExample()}}
                        />
                        :
                        <IconButton
                            icon="pause"
                            mode="outlined"
                            iconColor="#000"
                            size={70}
                            onPress={() => {
                                setPlaying(false)
                                pausePlayer()}}
                        />
                        }
            </View>
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
                >Siirry kysymykseen 3</Button>
        </Card>
    </View>
</SafeAreaView>
)}
export default TokaKysymys;


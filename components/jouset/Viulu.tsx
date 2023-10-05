import AppBar from '../Appbar';
import { Audio } from 'expo-av';
import { SoitinContext } from '../../context/SoitinContext';
import { useContext, useState, useEffect } from 'react';
import { styles }  from '../../styles/stylesSoittimet';
import {
    ScrollView,
    View,
    useWindowDimensions,
    Image,
    Animated
} from 'react-native';
import {
    IconButton, 
    Text, 
} from 'react-native-paper';
const soundObject = new Audio.Sound();


const Viulu = () => {

    let { height:windowHeight } = useWindowDimensions();
    windowHeight=windowHeight-350;

    const { sounds, jouset_images } = useContext(SoitinContext);
    const source =sounds[0].url
    const [playing, setPlaying ] = useState(false);
    const [unload, setUnload] = useState<boolean>(false);
   
    const playExample = async() => {
        setUnload(true);
        await soundObject.playAsync();
        //tähän pitäis saada koodi, jos on soitettu loppuun, soundi-objekti tyhjennetään
    }

    const pausePlayer = async() => {
        await soundObject.pauseAsync();
    }

    const backwardExample = async() => {
        await soundObject.stopAsync();
        await soundObject.unloadAsync();
        await soundObject.loadAsync(source);
        setPlaying(false);
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
        soundObject.loadAsync(source);
        setUnload(false);
    }, []);

    return (
    
    <View style={styles.container}>
   
        <ScrollView style={[styles.scrollView,{height:windowHeight}]}>
            <View style={[styles.titleView, {top: 40}]}>
                <Text style={styles.title}>Viulu</Text>
            </View>
            <Animated.View>
                <Image  source={jouset_images[0].img} style={[styles.img]} />
            </Animated.View>
                <Text style={{color: "#787276", fontSize: 22, alignSelf: 'center'}}>Kuuntele ääninäyte:</Text>
            <View style={styles.row_1}>
                <View style={styles.buttonBackground}>
                    <View style={styles.iconbuttons}>
                        <IconButton
                            icon="skip-backward"
                            iconColor='#15161a'
                            size={42}
                            onPress={ () => {
                                backwardExample();
                            }}
                        />
                        { (!playing) ? 
                        <IconButton
                            icon="play"
                            mode="contained"
                            iconColor="#151515"
                            size={47}
                            onPress={() => {
                                setPlaying(true);
                                playExample()}}
                        />
                        :
                        <IconButton
                            icon="pause"
                            mode="outlined"
                            iconColor="#fff"
                            size={47}
                            onPress={() => {
                                setPlaying(false)
                                pausePlayer()}}
                        />
                        }
                        <IconButton
                            icon="skip-forward"
                            iconColor='#15161a'
                            size={42}
                        />
                    </View>
                </View>
                <Text style={styles.textView}>Viulu on jousisoittimista korkeaäänisin soitin. Viulussa on neljä kieltä, jotka viritetään kvintin välein:  {'\n'} g, d1, a1, e2.</Text>
            </View>
        </ScrollView>
    </View>
);
}
    
export default Viulu;
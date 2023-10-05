import AppBar from '../Appbar';
import { Audio } from 'expo-av';
import { SoitinContext } from '../../context/SoitinContext';
import { useContext, useState, useEffect } from 'react';
import { styles }  from '../../styles/stylesSoittimet';
import {
    ScrollView,
    StyleSheet,
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


const Sello = () => {

    let { height:windowHeight } = useWindowDimensions();
    windowHeight=windowHeight-350;

    const { sounds } = useContext(SoitinContext);

    const source =sounds[2].url
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
        //await soundObject.playAsync();
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
    
    <View style={styles.container}>
        <ScrollView style={[styles.scrollView,{height:windowHeight}]}>
            <View style={[styles.titleView, {top: 20}]}>
                <Text style={[styles.title]}>Sello</Text>
            </View>
            <Animated.View>
                <Image  source={require('../../imgs/sello.jpg')} style={[styles.img]} />
            </Animated.View>
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
                <Text style={styles.textView}>Sello on jousisoitinperheen "isä". Sello on orkesterissa tavallisesti säestävä soitin, mutta sille on sävelletty myös runsaasti sooloteoksia. Sellossa on neljä kvintin välein viritettyä kieltä: C (matalin), G, d ja a.</Text>
            </View>
        </ScrollView>
    </View>
);
}
    
export default Sello;
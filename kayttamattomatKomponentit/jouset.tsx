import {useRef} from 'react';
import {
    Text,
    ScrollView,
    StyleSheet,
    View,
    Animated,
    useWindowDimensions,
    Image
} from 'react-native';
import {Card} from 'react-native-paper';

const images = [
    {id: 1, img: require('../imgs/viulu.png'), title: "viulu"},
    {id: 2, img: require('../imgs/alttoviulu.jpg'), title: "alttoviulu"},
    {id: 3, img: require('../imgs/sello.jpg'), title: "sello"},
    {id: 4, img: require('../imgs/kontrabassso.jpg'), title: "kontrabasso"},   
]

const Jouset = () => {

    const scroll = useRef(new Animated.Value(0)).current;

    let { width: windowWidth, height:windowHeight } = useWindowDimensions();

    windowHeight=windowHeight-300;
    
    return (
    
    <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={
            Animated.event(
                [],
                {useNativeDriver: false}
            )
        }>
        {images.map((image, idx) => {
          return (
            <Card
                key={idx}
                style={{width: windowWidth}}>
                <Card.Title 
                    title={image.title}
                    style={styles.cardtitle}
                    titleVariant="headlineMedium"
                />
                <Card.Cover source={image.img} style={styles.card} />
            </Card>
          );
        })}
      </ScrollView>

    )
}
export default Jouset;

const styles = StyleSheet.create({
    card: {
      flex: 1,
      marginVertical: 10,
      width:350,
      overflow: "hidden",
      alignSelf:"center",
      
    },
    cardtitle: {
      marginTop: 10
    }
    });
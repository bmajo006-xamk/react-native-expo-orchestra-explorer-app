import {
    ScrollView,
    StyleSheet,
    useWindowDimensions
} from 'react-native';
import {Card, Text} from 'react-native-paper';
//import Viulu from './jouset/viulu';

const images = [
    {id: 1, img: require('../imgs/viulu.png'), title: "Viulu"},
    {id: 2, img: require('../imgs/alttoviulu.jpg'), title: "Alttoviulu"},
    {id: 3, img: require('../imgs/sello.jpg'), title: "Sello"},
    {id: 4, img: require('../imgs/kontrabassso.jpg'), title: "Kontrabasso"},   
]


const JousetSlide = () => {

    let {height:windowHeight } = useWindowDimensions();
    windowHeight=windowHeight-300;

    return (
    

    <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
    >
    { images.map((image, idx: number) => {
            return (
        <Card
            key={idx}
            style={styles.card}>
            <Card.Cover source={image.img} />
            <Card.Content>
                <Text>{image.title}</Text>
            </Card.Content>
        </Card>
        )
      }
    )}
    </ScrollView>
    )
}
export default JousetSlide;

const styles = StyleSheet.create({
    card: {
      flex: 1,
      marginVertical: 10,
      width: 360,
      height: '100%',
      alignSelf:"center",
      
    }
    });
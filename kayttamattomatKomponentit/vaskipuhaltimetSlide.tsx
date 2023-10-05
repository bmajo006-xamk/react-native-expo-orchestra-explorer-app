import {
    ScrollView,
    StyleSheet,
    useWindowDimensions
} from 'react-native';
import {Card, Text, Button} from 'react-native-paper';



const images = [
    {id: 1, img: require('../imgs/trumpetti.jpg'), title: "Trumpetti"},
    {id: 2, img: require('../imgs/pasuuna.jpg'), title: "Pasuuna"},
    {id: 3, img: require('../imgs/kayratorvi.jpg'), title: "Käyrätorvi"},
    {id: 4, img: require('../imgs/tuuba.jpg'), title: "Tuuba"},   
]

const VaskipuhaltimetSlide = ({ navigation } : any) => {

    let { height:windowHeight } = useWindowDimensions();
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
            <Card.Actions>
                <Button
                    onPress ={ () => navigation.navigate('Vaskipuhaltimet')}>Lue lisää</Button>
            </Card.Actions>
        </Card>
        )
      }
    )}
    </ScrollView>

    )
}
export default VaskipuhaltimetSlide;

const styles = StyleSheet.create({
    card: {
      flex: 1,
      marginVertical: 10,
      width: 360,
      height: '100%',
      overflow: "hidden",
      alignSelf:"center",
      
    }
    });
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#151515',
        alignItems: 'center',
    },
    scrollView: {
        shadowOpacity:3,
        width: "100%",
        padding: 25,
        height: 20
    },
    titleView: {
        width: "100%",
        height: 40
    },
    img: {
      marginVertical: 10,
      width:420,
      height: 380,
      overflow: "hidden",
      alignSelf:"center",
      top: 10,
    },
    row_1: {
        width: "100%",
        minHeight: 340,
        maxHeight: 1000,
        alignItems: "center",
        top:-70,
        bottom: 40
    },
    
    buttonBackground: {
        width: '95%',
        height: 80,
        top: 90,
        borderRadius: 20,
        backgroundColor: '#383b3f',
        opacity: 0.8,
        alignItems: 'center'
    },
    iconbuttons: {
        flex: 1,
        flexDirection: 'row',
    },
    title:{
        width:"100%",
        color: "#787276",
        fontSize: 27,
        fontWeight: "bold",
        top: 10
        
    },
    subtitle: {
        color: "#787276",
        fontSize: 18,
        bottom: 8,
    
    },
    textView:{
        color: "#787276",
        fontSize: 19,
        textAlign: "center",
        letterSpacing: 0.2,
        top: '32%'
    },
    
    });
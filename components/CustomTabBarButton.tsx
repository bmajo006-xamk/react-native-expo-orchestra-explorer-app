import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';

interface Props {
    children: any

}

const CustomTabBarButton : React.FC<Props> = (props : any) : React.ReactElement  => {

    const {children, onPress} = props;
    
        return (
            <TouchableOpacity onPress={onPress} style={styles.inactiveBtn}>
                <Text>{children}</Text>
            </TouchableOpacity>
        
        )
    

}
export default CustomTabBarButton;

const styles = StyleSheet.create({

    activeBtn: {
        position: "absolute",
        backgroundColor: '#fff',
        opacity: 0.80,
        width: 55,
        height: 55,
        borderRadius: 29,
        bottom: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    inactiveBtn: {
        flex: 1,
        backgroundColor: '#151515',
        justifyContent: "center",
        alignItems: "center",
    },
  

});
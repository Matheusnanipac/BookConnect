import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native-web";

const SuperButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={
                props.primary
                    ? style.buttonPrimary
                    : style.buttonOutlined
                }
                onPress={props.onPress}>
                
                <Text
                    style={props.primary
                    ? style.valuePrimary
                    : style.valueOutlined}>

                    {props.value}
                </Text>
            </TouchableOpacity>
        </View>
    )

}

const style = StyleSheet.create({
    buttonPrimary: {
        alignItems: 'center',
        backgroundColor: '#CDB81C',
        padding: 8,
        width: 320,
        borderRadius: 4,
        marginTop: 5,
    },
    valuePrimary: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },

    buttonOutlined: {
        alignItems: 'center',
        backgroundColor: "#fff",
        padding: 8,
        width: 320,
        borderRadius: 4,
        marginTop: 5,
        borderColor: '#CDB81C',
        borderWidth:1
    },
    valueOutlined: {
        color: 'BLACK',
        fontSize: 18,
        fontWeight: '600'
    }


});



export default SuperButton;
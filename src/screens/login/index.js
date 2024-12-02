import { Text, View, StyleSheet, Alert } from "react-native"
import Input from "../../components/MeuInput"
import SuperButton from "../../components/SuperButton"
import { usuarios } from "../../users";
import * as React from 'react';




export default function Login ({navigation}) {

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const login = () => {
        
        const usuario = usuarios.find (user => user.email === email && user.senha === senha)

        if(usuario) {
            navigation.navigate('home', { usuario });
        } else {
            alert('Erro', 'Usuario ou senha inválidos');
        }

        
    };

    const cadastrar = () => {
        alert('Cadastrar', 'Você deseja cadastrar?')
    }
    
    return (
        <View style={styles.boxTexto}>
           <Text style={styles.titulo}>Seja bem Vindo</Text>
           <Input 
                label="E-mail"
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                comMascara={false}
            />

            <Input 
                label="Senha"
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                comMascara={true}
            />

            <View style={styles.BoxRecuperarSenha}>
                <Text style={styles.esqueciMinhaSenha}>Esqueci minha senha</Text>
            </View>

            <View style={{marginBottom: 15, marginTop: 15}}>
                <SuperButton
                value='Entrar'
                onPress={login}
                primary/>
            </View>

            <View>
                <SuperButton
                value='Cadastrar'
                onPress={cadastrar}/>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    boxTexto:{
        flex:1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 47,
        color: 'black',
        fontWeight: 700,
        marginBottom: 40
    },

    BoxRecuperarSenha:{
        justifyContent: "flex-start",
    },
    esqueciMinhaSenha:{
        color: 'black',
        fontStyle: 'italic',
        fontSize: 12
    }
})
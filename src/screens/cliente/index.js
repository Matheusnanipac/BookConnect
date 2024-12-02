import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const praia150 = require('../../../assets/praia150.jpg');

const ProfileScreen = () => {
    const user = {
        name: 'Usuario Teste',
        email: 'teste@teste.com',
        avatar: praia150,
        bio: 'Bio Teste'
    };

    return (
        <View style={styles.container}>
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#CDB81C',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    email: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

export default ProfileScreen;
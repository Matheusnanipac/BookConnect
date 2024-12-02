import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native';


const camara150 = require('../../../assets/camara150.jpg');
const prisioneiro150 = require('../../../assets/askaban150.jpg');
const calice150 = require('../../../assets/calice150.jpg');
const narnia150 = require('../../../assets/narnia150.jpg');
const jogos150 = require('../../../assets/jogos150.jpg');

const livros = [
    { id: '1', titulo: 'Harry Potter Camara secreta', autor: 'J.K Rowling', capa: camara150 },
    { id: '2', titulo: 'Harry Potter Prisioneiro de Askaban', autor: 'J.K Rowling', capa: prisioneiro150 },
    { id: '3', titulo: 'Harry Potter Calice de fogo', autor: 'J.K Rowling', capa: calice150 },
    { id: '4', titulo: 'As Cronicas de Narnia', autor: 'C.S. Lewis', capa: narnia150 },
    { id: '5', titulo: 'Jogos Vorazes', autor: 'Suzanne Collins', capa: jogos150 },
];
const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const livrosFiltrados = livros.filter(Livro =>
        Livro.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        Livro.autor.toLowerCase().includes(searchQuery.toLowerCase())
    );' '

    const renderItem = ({ item }) => (
        <View style={styles.item}>
        <Image source={item.capa} style={styles.cover} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.author}>{item.autor}</Text>
        </View>
        </View>
    );

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar livros..."
            value={searchQuery}
            onChangeText={setSearchQuery}
        />
        <FlatList
            data={livrosFiltrados}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
        />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDB81C',
        padding: 10,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    list: {
        paddingBottom: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#ffdab4',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    cover: {
        width: 50,
        height: 75,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    author: {
        fontSize: 16,
        color: '#666',
    },
});

export default Home;
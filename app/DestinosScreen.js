// app/Destinos.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const cidades = [
    {
        name: 'Teresina',
        description: 'Capital do Piauí, conhecida por sua cultura e gastronomia.',
        attractions: ['Parque da Cidade', 'Teatro 4 de Setembro', 'Museu do Piauí'],
        image: 'https://www.gp1.com.br/media/images/2018/01/20/thanis-killian.jpg',
    },
    {
        name: 'São Paulo',
        description: 'A maior cidade do Brasil, famosa por sua diversidade cultural.',
        attractions: ['Avenida Paulista', 'Parque Ibirapuera', 'Museu de Arte de São Paulo'],
        image: 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/extra-globo-com/incoming/10354361-390-a2b/w640h360-PROP/assalto-sao-paulo.jpeg-(2).jpg',
    },
    {
        name: 'Rio de Janeiro',
        description: 'Conhecida por suas praias e o famoso Pão de Açúcar.',
        attractions: ['Cristo Redentor', 'Copacabana', 'Pão de Açúcar'],
        image: 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/extra-globo-com/incoming/19312321-e56-01c/w640h360-PROP/7cb60e94261d050ee22e1aa5f5e6126d.jpg',
    },
    {
        name: 'Salvador',
        description: 'Famosa por sua rica cultura e o Carnaval.',
        attractions: ['Pelourinho', 'Elevador Lacerda', 'Igreja do Bonfim'],
        image: 'https://blogs.correio24h.com.br/mesalte/wp-content/uploads/2018/02/Mascaradosa.jpg',
    },
    {
        name: 'Belo Horizonte',
        description: 'Conhecida por sua culinária e montanhas ao redor.',
        attractions: ['Praça da Liberdade', 'Mercado Central', 'Igreja São Francisco de Assis'],
        image: 'https://s2-g1.glbimg.com/OPbQ2xuzpoh4hfszYW-f1Eo3UmU=/0x0:1920x1280/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/A/r/vxcrsBR3KS8J939sz6wQ/variosqueijosbalcao.jpg',
    },
    {
        name: 'Curitiba',
        description: 'Famosa por seu planejamento urbano e áreas verdes.',
        attractions: ['Jardim Botânico', 'Ópera de Arame', 'Museu Oscar Niemeyer'],
        image: 'https://hoteliernews.com.br/wp-content/uploads/2020/07/salvador-pelourinho-foto-fernando-dallacqua-3.jpg',
    },
];

export default function DestinosScreen({ navigation }) {
    const renderCityButton = ({ item }) => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CityDetails', { city: item })} // 
        >
            <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha uma Cidade</Text>
            <FlatList
                data={cidades}
                renderItem={renderCityButton}
                keyExtractor={(item) => item.name}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#800080',
    },
    button: {
        backgroundColor: '#6A0CAD',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});

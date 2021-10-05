import { Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import NavigationService from 'app/navigation/NavigationService';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';

import styles from './styles';
const Home: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [searchfeild, setSearchfeild] = useState('');

  useEffect(() => {
    fetchPokemons(limit, offset);
  }, [limit, offset]);

  const fetchPokemons = (limitF: number, offsetF: number) => {
    fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=' +
        limitF +
        '&offset=' +
        offsetF,
    )
      .then(response => response.json())
      .then(pokemonsR => {
        setPokemons(pokemonsR.results);
        console.log(pokemonsR.results);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.parentSearch}>
        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchfeild}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchfeild(value)}
            value={searchfeild}
          />
        </View>
        <Button
          icon="logout"
          mode="outlined"
          onPress={onLogout}
          style={styles.logout}>
          Logout
        </Button>
      </View>
      <ScrollView
        onScroll={e => {
          let paddingToBottom = 10;
          paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          if (
            e.nativeEvent.contentOffset.y >=
            e.nativeEvent.contentSize.height - paddingToBottom
          ) {
            // fetchPokemons(40, 1);
            setLimit(limit + 20);
            setOffset(offset + 1);
          }
        }}>
        <View style={styles.containerPok}>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()),
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    NavigationService.navigate('Details', {
                      pokemon: pokemon.name,
                    })
                  }>
                  <View style={styles.card}>
                    <Card key={index}>
                      <CardImage
                        source={{
                          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                        }}
                        title={pokemon.name}
                        style={styles.cardI}
                      />
                    </Card>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

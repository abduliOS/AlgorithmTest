import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { FlatGrid } from 'react-native-super-grid';

import styles from './styles';
const Home: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  const handleIndexChange = (index: number) => {
    setSelectedIndex(index);
  };

  const array = [
    '[ [3,4], [4,5], [2,3], [3,4] ]',
    'Passengers waiting in queue',
    '[ [3,2], [4,3], [2,3], [3,4] ]',
    '30 passengers seating',
  ];

  const [itemsGridOne, setItemsGridOne] = React.useState([
    { name: '', code: '#88ab47' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#88ab47' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#88ab47' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#88ab47' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
  ]);

  const [itemsGridTwo, setItemsGridTwo] = React.useState([
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#3c66a4' },
  ]);
  const [itemsGridThree, setItemsGridThree] = React.useState([
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
  ]);
  const [itemsGridFour, setItemsGridFour] = React.useState([
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#88ab47' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#88ab47' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#88ab47' },
    { name: '', code: '#3c66a4' },
    { name: '', code: '#ab3a3c' },
    { name: '', code: '#88ab47' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
    { name: '', code: '#ecf0f1' },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.segment}>
        <SegmentedControlTab
          values={['2D-One', 'Queue', '2D-Two', '30 Table']}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
        />
        <Text style={styles.text}>{array[selectedIndex]}</Text>
      </View>
      <View style={styles.containerBox}>
        <View style={styles.gridViewFirstBox}>
          <FlatGrid
            itemDimension={20}
            data={itemsGridOne}
            style={styles.gridView}
            spacing={4}
            renderItem={({ item }) => (
              <View
                style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.gridViewSecondBox}>
          <FlatGrid
            itemDimension={20}
            data={itemsGridTwo}
            style={styles.gridView}
            spacing={4}
            renderItem={({ item }) => (
              <View
                style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.gridViewThirdBox}>
          <FlatGrid
            itemDimension={20}
            data={itemsGridThree}
            style={styles.gridView}
            spacing={4}
            renderItem={({ item }) => (
              <View
                style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.gridViewFirstBox}>
          <FlatGrid
            itemDimension={20}
            data={itemsGridFour}
            style={styles.gridView}
            spacing={4}
            renderItem={({ item }) => (
              <View
                style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <Button
        icon="logout"
        mode="outlined"
        onPress={onLogout}
        style={styles.logout}>
        Logout
      </Button>
    </View>
  );
};

export default Home;

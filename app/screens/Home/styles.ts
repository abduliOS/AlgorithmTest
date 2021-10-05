import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  segment: {
    top: 30,
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
  },
  text: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  containerBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center', // if you want to fill rows left to right
    justifyContent: 'space-between',
    top: 150,
  },
  item: {
    width: '50%', // is 50% of container width
    backgroundColor: 'red',
  },
  gridViewFirstBox: {
    marginLeft: 6,
    marginTop: 10,
    flex: 0.25,
  },
  gridViewSecondBox: {
    marginLeft: 6,
    marginTop: 10,
    flex: 0.4,
  },
  gridViewThirdBox: {
    marginLeft: 6,
    marginTop: 10,
    flex: 0.2,
  },
  gridViewFourthBox: {
    marginLeft: 6,
    marginTop: 10,
    flex: 0.25,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 20,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  containerPok: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  card: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
    width: 150,
    height: 150,
  },
  cardI: {
    width: 100,
    height: 100,
  },
  TitleI: {
    fontSize: 10,
    color: '#fff',
  },
  searchCont: {
    alignItems: 'flex-end',
  },
  parentSearch: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: 20,
  },
  logout: {
    marginLeft: 10,
    alignItems: 'flex-end',
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#BD4B4B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerTXT: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    marginHorizontal: 10,
    maxHeight: 170,
  },
  itemListContainerGanjil: {
    backgroundColor: '#EFB7B7',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemListContainerGenap: {
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListGaris: {
    backgroundColor: '#a11',
    width: 5,
    height: '80%',
  },
  itemListGarisLain: {
    backgroundColor: '#bf1',
    width: 5,
    height: '80%',
  },
  itemListTXT: {
    color: '#11d',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  judulTXT: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  judulSpesialTXT: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
  },
  touchableContainer: {
    backgroundColor: '#000000',
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableTXT: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
});

import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {
  faMapMarkedAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {HomeStyle} = Style;

function HomePages() {
  const [dataProvince, setDataProvince] = React.useState([]);
  const [dataCity, setDataCity] = React.useState([]);
  const [pilihan, setPilihan] = React.useState({
    province_id: '0',
    city_id: '0',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://api.rajaongkir.com/starter/province', {
          headers: {
            key: 'a859a88a391906818f6cb78fb4bdfc74',
          },
        })
        .then(res => {
          setDataProvince(res.data.rajaongkir.results);
        })
        .catch(e => Alert.alert('Gagal!', e));
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    if (pilihan.province_id !== '0') {
      async function fetchData() {
        await axios
          .get('https://api.rajaongkir.com/starter/city', {
            headers: {
              key: 'a859a88a391906818f6cb78fb4bdfc74',
            },
            params: {
              province: pilihan.province_id.province_id,
            },
          })
          .then(res => {
            setDataCity(res.data.rajaongkir.results);
          })
          .catch(e => Alert.alert('Gagal!', e));
      }
      fetchData();
    }
  }, [pilihan.province_id]);

  const ListItemNamaProv = dataPassing => {
    return (
      <TouchableOpacity
        style={
          dataPassing.dataNama.province_id % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }
        onPress={() =>
          setPilihan({
            ...pilihan,
            ['province_id']: dataPassing.dataNama,
          })
        }>
        <View>
          <FontAwesomeIcon icon={faMapMarkedAlt} size={20} color="#fff" />
        </View>
        <Text style={HomeStyle.itemListTXT}>
          {dataPassing.dataNama.province}
        </Text>
      </TouchableOpacity>
    );
  };

  const ListItemNamaCity = dataPassing => {
    return (
      <TouchableOpacity
        style={
          dataPassing.index % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }
        onPress={() =>
          setPilihan({
            ...pilihan,
            ['city_id']: dataPassing.dataNama,
          })
        }>
        <View>
          <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#fff" />
        </View>
        <Text style={HomeStyle.itemListTXT}>
          {dataPassing.dataNama.city_name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>Shafiyah Huyai - 21120119120004</Text>
      </View>
      <Text style={HomeStyle.judulSpesialTXT}>
        {'Provinsi: ' + (pilihan.province_id === '0' ? '' : pilihan.province_id.province)}
      </Text>
      <Text style={HomeStyle.judulSpesialTXT}>
        {'Kota : ' + (pilihan.city_id === '0' ? '' : pilihan.city_id.city_name)}
      </Text>
      <Text style={HomeStyle.judulTXT}>Provinsi</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={dataProvince}
        renderItem={({item}) => <ListItemNamaProv dataNama={item} />}
        keyExtractor={item => item.province_id}
        style={HomeStyle.flatlist}
      />
      <Text style={HomeStyle.judulTXT}>City</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={dataCity}
        renderItem={({item, index}) => (<ListItemNamaCity dataNama={item} index={index} />)}
        keyExtractor={(item, index) => index}
        style={HomeStyle.flatlist}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: 'FILL_PROVCITY',
            inputValue: pilihan,
          });
          navigation.navigate('HomeDetailPage');
        }}
        style={HomeStyle.touchableContainer}>
        <Text style={HomeStyle.touchableTXT}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePages;
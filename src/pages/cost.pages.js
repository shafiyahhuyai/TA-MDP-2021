import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {CostStyle} = Style;

function CostPages() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    origin: '',
    destination: '',
    weight: 0,
  });

  async function fetchData() {
    const formData = new FormData();
    formData.append('origin', data.origin.toString());
    formData.append('destination', data.destination.toString());
    formData.append('weight', data.weight);
    formData.append('courier', 'jne');
    await axios
      .post('https://api.rajaongkir.com/starter/cost', formData, {
        headers: {
          key: 'a859a88a391906818f6cb78fb4bdfc74',
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      .then(res => {
        dispatch({
          type: 'FILL_COST',
          inputValue: res.data.rajaongkir,
        });
        navigation.navigate('CostDetailPage');
      })
      .catch(e => Alert.alert('Gagal!', e));
  }

  return (
    <View style={CostStyle.container}>
      <View style={CostStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={CostStyle.headerImage}
        />
        <Text style={CostStyle.headerTXT}>Shafiyah Huyai - 21120119120004</Text>
      </View>
      <Text style={CostStyle.judulTXT}>Kode Kota Awal :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Kode Kota Awal"
        keyboardType="numeric"
        onChangeText={value =>
          setData({
            ...data,
            ['origin']: value,
          })
        }
      />
      <Text style={CostStyle.judulTXT}>Kode Kota Tujuan :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Kode Kota Tujuan"
        keyboardType="numeric"
        onChangeText={value =>
          setData({
            ...data,
            ['destination']: value,
          })
        }
      />
      <Text style={CostStyle.judulTXT}>Berat :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Berat (dalam gram)"
        keyboardType="numeric"
        onChangeText={value =>
          setData({
            ...data,
            ['weight']: value,
          })
        }
      />
      <TouchableOpacity
        onPress={() => {
          fetchData();
        }}
        style={CostStyle.touchableContainer}>
        <Text style={CostStyle.touchableTXT}>Cek Ongkir</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CostPages;

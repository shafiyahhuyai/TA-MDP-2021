import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';

const {HomeStyle} = Style;

function HomeDetailPages() {
  const ProvCityReducer = useSelector(state => state.ProvCityReducer);
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
      <View>
        <Text style={HomeStyle.judulTXT}>Kota Detail : </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Kota ID : ' + ProvCityReducer.province_id.city_id}
        </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Nama : ' +
            ProvCityReducer.province_id.type +
            ' ' +
            ProvCityReducer.province_id.city_name}
        </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Provinsi : ' + ProvCityReducer.province_id.province}
        </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Kode Pos : ' + ProvCityReducer.province_id.postal_code}
        </Text>
      </View>
    </View>
  );
}

export default HomeDetailPages;

import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';
import {faDollarSign} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const {CostStyle} = Style;

function CostDetailPages() {
  const CostReducer = useSelector(state => state.CostReducer);
  const ListItemNamaCity = dataPassing => {
    return (
      <View
        style={
          dataPassing.cost % 2 === 1
            ? CostStyle.itemListContainerGanjil
            : CostStyle.itemListContainerGenap
        }>
        <FontAwesomeIcon icon={faDollarSign} size={20} color="#fff" />
        <View style={{marginLeft: 5, marginVertical: 5}}>
          <Text style={CostStyle.itemListTXT}>
            {dataPassing.dataNama.cost[0].value}
          </Text>
          <Text style={CostStyle.itemListTXT}>
            {dataPassing.dataNama.description}
          </Text>
        </View>
      </View>
    );
  };
  console.log(CostReducer.data.results[0].costs);
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
      <Text style={CostStyle.judulTXT}>
        {'Kota Awal : ' + CostReducer.data.origin_details.city_name}
      </Text>
      <Text style={CostStyle.judulTXT}>
        {'Kota Tujuan : ' + CostReducer.data.destination_details.city_name}
      </Text>
      <Text style={CostStyle.judulTXT}>{'Harga :'}</Text>
      {CostReducer.data.results[0].costs.map((item, index) => {
        return <ListItemNamaCity dataNama={item} key={index} />;
      })}
    </View>
  );
}

export default CostDetailPages;

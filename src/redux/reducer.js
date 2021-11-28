import {combineReducers} from 'redux';

const initialStateProvCity = {
  province_id: {},
  city_id: {},
};

const ProvCityReducer = (state = initialStateProvCity, action) => {
  if (action.type === 'FILL_PROVCITY') {
    return {
      ...state,
      ['province_id']: action.inputValue.city_id,
      ['city_id']: action.inputValue.province_id,
    };
  }
  return state;
};

const initialStateCost = {
  data: {},
};

const CostReducer = (state = initialStateCost, action) => {
  if (action.type === 'FILL_COST') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  ProvCityReducer,
  CostReducer,
});

export default reducer;

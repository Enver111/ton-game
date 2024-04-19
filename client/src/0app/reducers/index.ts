import { combineReducers } from 'redux';
//import { weaponReducer } from '@shared/actions/reducer'; // Импортируйте ваши редукторы
import shopReducer from '@shared/actions/reducer';
const rootReducer = combineReducers({
  shop: shopReducer,
  // Добавьте другие редукторы здесь
});

export default rootReducer;

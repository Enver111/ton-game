import { combineReducers } from 'redux';
import { weaponReducer } from '@shared/actions/reducer'; // Импортируйте ваши редукторы

const rootReducer = combineReducers({
  weapon: weaponReducer,
  // Добавьте другие редукторы здесь
});

export default rootReducer;

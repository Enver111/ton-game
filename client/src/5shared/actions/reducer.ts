/* import { SELECT_WEAPON, WeaponActionTypes } from './actions';

interface WeaponState {
  selectedWeapon: any; // Замените на тип вашего оружия
}

const initialState: WeaponState = {
  selectedWeapon: null,
};

export const weaponReducer = (
  state = initialState,
  action: WeaponActionTypes
): WeaponState => {
  switch (action.type) {
    case SELECT_WEAPON:
      return { ...state, selectedWeapon: action.payload };
    default:
      return state;
  }
}; */

import { ADD_SELECTED_ITEM, AddSelectedItemTypes } from './actions';

interface SelectedItemsState {
  selectedItems: any;
}
const initialState = {
  selectedItems: [],
};

const shopReducer = (
  state = initialState,
  action: AddSelectedItemTypes
): SelectedItemsState => {
  switch (action.type) {
    case ADD_SELECTED_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    default:
      return state;
  }
};

export default shopReducer;

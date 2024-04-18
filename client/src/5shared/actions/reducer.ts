import { SELECT_WEAPON, WeaponActionTypes } from './actions';

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
};

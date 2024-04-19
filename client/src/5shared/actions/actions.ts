/* export const SELECT_WEAPON = 'SELECT_WEAPON';

interface SelectWeaponAction {
  type: typeof SELECT_WEAPON;
  payload: any; // Замените на тип вашего оружия
}

export const selectWeapon = (weapon: any): SelectWeaponAction => ({
  type: SELECT_WEAPON,
  payload: weapon,
});

export type WeaponActionTypes = SelectWeaponAction;
export type AppActions = WeaponActionTypes;
 */
export const ADD_SELECTED_ITEM = 'ADD_SELECTED_ITEM';

interface AddSelectedItem {
  type: typeof ADD_SELECTED_ITEM;
  payload: any;
}
export const addSelectedItem = (item: any): AddSelectedItem => ({
  type: ADD_SELECTED_ITEM,
  payload: item,
});

export type AddSelectedItemTypes = AddSelectedItem;

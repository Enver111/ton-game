export const SELECT_WEAPON = 'SELECT_WEAPON';

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

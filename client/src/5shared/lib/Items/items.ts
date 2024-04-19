import AK_47 from '../../assets/icons/Weapons/AK-47.png';
import Uzi from '../../assets/icons/Weapons/Uzi.png';
import HK_USP from '../../assets/icons/Weapons/HK USP.png';
import Thompson from '../../assets/icons/Weapons/Thompson.png';
import M_16 from '../../assets/icons/Weapons/М-16.png';

import Bandages from '../../assets/icons/MedicalKit/bandages.png';
import Syringe from '../../assets/icons/MedicalKit/syringe.png';
import Pill from '../../assets/icons/MedicalKit/pill.png';
import Aid_kit from '../../assets/icons/MedicalKit/aid-kit.png';

import Mushroom from '../../assets/icons/Food/Mushroom.png';
import Corn from '../../assets/icons/Food/Corn.png';
import Pumpkin from '../../assets/icons/Food/Pumpkin.png';
import Meat from '../../assets/icons/Food/Meat.png';
import Apple from '../../assets/icons/Food/Apple.png';
import Berry from '../../assets/icons/Food/Berry.png';
import Chocolate from '../../assets/icons/Food/Chocolate.png';
import Tinned from '../../assets/icons/Food/Tinned.png';
import Can_fish from '../../assets/icons/Food/Can_fish.png';
import Canned_food from '../../assets/icons/Food/Canned_food.png';

import Sweater from '../../assets/icons/Equipment/sweater.png';
import Projective_wear from '../../assets/icons/Equipment/protective_wear.png';
import Gas_mask from '../../assets/icons/Equipment/gas_mask.png';
import Gloves from '../../assets/icons/Equipment/gloves.png';
import Boots from '../../assets/icons/Equipment/boots.png';
import Bullet from '../../assets/icons/Equipment/bullet.png';
import Millitary_hat from '../../assets/icons/Equipment/military-hat.png';

/* export interface Weapons {
  id: number;
  name: string;
  logo: string;
  damage: number;
  price: number;
}
export interface MedicalKits {
  id: number;
  name: string;
  logo: string;
  hill: number;
  price: number;
}
export interface Foods {
  id: number;
  name: string;
  logo: string;
  hill: number;
  price: number;
} */

export const weapons = [
  { id: 1, name: 'AK-47', logo: AK_47, damage: 15, price: 100 },
  { id: 2, name: 'Uzi', logo: Uzi, damage: 15, price: 100 },
  { id: 3, name: 'HK_USP', logo: HK_USP, damage: 15, price: 100 },
  { id: 4, name: 'Thompson', logo: Thompson, damage: 15, price: 100 },
  { id: 5, name: 'M16', logo: M_16, damage: 15, price: 100 },
];

export const medicalKits = [
  { id: 11, name: 'Bandages', logo: Bandages, hill: 20, price: 100 },
  { id: 12, name: 'Syringe', logo: Syringe, hill: 40, price: 100 },
  { id: 13, name: 'Pill', logo: Pill, hill: 30, price: 100 },
  { id: 14, name: 'Aid kit', logo: Aid_kit, hill: 80, price: 150 },
];

export const foods = [
  { id: 15, name: 'Mushroom', logo: Mushroom, hill: 15, price: 100 },
  { id: 16, name: 'Corn', logo: Corn, hill: 15, price: 100 },
  { id: 17, name: 'Pumpkin', logo: Pumpkin, hill: 15, price: 100 },
  { id: 18, name: 'Meat', logo: Meat, hill: 15, price: 100 },
  { id: 19, name: 'Apple', logo: Apple, hill: 15, price: 100 },
  { id: 20, name: 'Berry', logo: Berry, hill: 15, price: 100 },
  { id: 21, name: 'Chocolate', logo: Chocolate, hill: 15, price: 100 },
  { id: 22, name: 'Tinned', logo: Tinned, hill: 15, price: 100 },
  { id: 23, name: 'Can fish', logo: Can_fish, hill: 15, price: 100 },
  { id: 24, name: 'Canned food', logo: Canned_food, hill: 15, price: 100 },
];

export const equipment = [
  { id: 25, name: 'Sweater', logo: Sweater, protection: 15, price: 100 },
  {
    id: 26,
    name: 'Projective_wear',
    logo: Projective_wear,
    protection: 15,
    price: 100,
  },
  { id: 27, name: 'Gas_mask', logo: Gas_mask, protection: 15, price: 100 },
  { id: 28, name: 'Gloves', logo: Gloves, protection: 15, price: 100 },
  { id: 29, name: 'Boots', logo: Boots, protection: 15, price: 100 },
  { id: 30, name: 'Bullet', logo: Bullet, protection: 15, price: 100 },
  {
    id: 31,
    name: 'Millitary_hat',
    logo: Millitary_hat,
    protection: 15,
    price: 100,
  },
];

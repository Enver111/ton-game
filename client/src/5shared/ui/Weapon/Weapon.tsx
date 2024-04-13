import AK_47 from '../../assets/icons/Weapons/AK-47.png';
import Uzi from '../../assets/icons/Weapons/Uzi.png';
import HK_USP from '../../assets/icons/Weapons/HK USP.png';
import Thompson from '../../assets/icons/Weapons/Thompson.png';
import M_16 from '../../assets/icons/Weapons/М-16.png';

import style from './Weapon.module.css';

const Weapon = () => {
  const weapons = [
    { id: 1, name: 'AK-47', logo: AK_47, damage: 15, price: 100 },
    { id: 2, name: 'Uzi', logo: Uzi, damage: 15, price: 100 },
    { id: 3, name: 'HK_USP', logo: HK_USP, damage: 15, price: 100 },
    { id: 4, name: 'Thompson', logo: Thompson, damage: 15, price: 100 },
    { id: 5, name: 'M16', logo: M_16, damage: 15, price: 100 },
    { id: 6, name: 'AK-47', logo: AK_47, damage: 15, price: 100 },
    { id: 7, name: 'Uzi', logo: Uzi, damage: 15, price: 100 },
    { id: 8, name: 'HK_USP', logo: HK_USP, damage: 15, price: 100 },
    { id: 9, name: 'Thompson', logo: Thompson, damage: 15, price: 100 },
    { id: 10, name: 'M16', logo: M_16, damage: 15, price: 100 },
  ];
  return (
    <div className={style.weapons}>
      {weapons.map((weapon) => (
        <div key={weapon.id} className={style.weaponCard}>
          <img
            src={weapon.logo}
            alt={weapon.name}
            className={style.weaponLogo}
          />
          <div className={style.weaponInfo}>
            <h4 className={style.name}>{weapon.name}</h4>
            <span className={style.characteristic}>
              Damage: {weapon.damage}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Weapon;

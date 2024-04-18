import { weapons } from '@shared/lib/Items/items';

import style from './Weapon.module.css';

const Weapon = () => {
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

import { equipment } from '@shared/lib/Items/items';

import style from '../Weapon/Weapon.module.css';

const Equipment = () => {
  return (
    <div className={style.weapons}>
      {equipment.map((equipment) => (
        <div key={equipment.id} className={style.weaponCard}>
          <img
            src={equipment.logo}
            alt={equipment.name}
            className={style.weaponLogo}
          />
          <div className={style.weaponInfo}>
            <h4 className={style.name}>{equipment.name}</h4>
            <span className={style.characteristic}>
              Protection: {equipment.protection}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Equipment;

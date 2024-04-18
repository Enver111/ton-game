import { foods } from '@shared/lib/Items/items';
import style from '../Weapon/Weapon.module.css';

const Food = () => {
  return (
    <div className={style.weapons}>
      {foods.map((foods) => (
        <div key={foods.id} className={style.weaponCard}>
          <img src={foods.logo} alt={foods.name} className={style.weaponLogo} />
          <div className={style.weaponInfo}>
            <h4 className={style.name}>{foods.name}</h4>
            <span className={style.characteristic}>Hill: {foods.hill}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;

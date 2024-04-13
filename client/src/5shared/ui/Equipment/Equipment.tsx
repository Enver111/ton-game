import Sweater from '../../assets/icons/Equipment/sweater.png';
import Projective_wear from '../../assets/icons/Equipment/protective_wear.png';
import Gas_mask from '../../assets/icons/Equipment/gas_mask.png';
import Gloves from '../../assets/icons/Equipment/gloves.png';
import Boots from '../../assets/icons/Equipment/boots.png';
import Bullet from '../../assets/icons/Equipment/bullet.png';
import Millitary_hat from '../../assets/icons/Equipment/military-hat.png';

import style from '../Weapon/Weapon.module.css';

const Equipment = () => {
  const equipment = [
    { id: 1, name: 'Sweater', logo: Sweater, protection: 15, price: 100 },
    {
      id: 2,
      name: 'Projective_wear',
      logo: Projective_wear,
      protection: 15,
      price: 100,
    },
    { id: 3, name: 'Gas_mask', logo: Gas_mask, protection: 15, price: 100 },
    { id: 4, name: 'Gloves', logo: Gloves, protection: 15, price: 100 },
    { id: 5, name: 'Boots', logo: Boots, protection: 15, price: 100 },
    { id: 6, name: 'Bullet', logo: Bullet, protection: 15, price: 100 },
    {
      id: 7,
      name: 'Millitary_hat',
      logo: Millitary_hat,
      protection: 15,
      price: 100,
    },
  ];
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

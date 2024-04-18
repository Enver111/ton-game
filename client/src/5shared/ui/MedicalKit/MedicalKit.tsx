import { medicalKits } from '@shared/lib/Items/items';
import style from '../Weapon/Weapon.module.css';

const MedicalKit = () => {
  return (
    <div className={style.weapons}>
      {medicalKits.map((medicalKits) => (
        <div key={medicalKits.id} className={style.weaponCard}>
          <img
            src={medicalKits.logo}
            alt={medicalKits.name}
            className={style.weaponLogo}
          />
          <div className={style.weaponInfo}>
            <h4 className={style.name}>{medicalKits.name}</h4>
            <span className={style.characteristic}>
              Hill: {medicalKits.hill}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalKit;

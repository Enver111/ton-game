import Bandages from '../../assets/icons/MedicalKit/bandages.png';
import Syringe from '../../assets/icons/MedicalKit/syringe.png';
import Pill from '../../assets/icons/MedicalKit/pill.png';
import Aid_kit from '../../assets/icons/MedicalKit/aid-kit.png';
import style from '../Weapon/Weapon.module.css';

const MedicalKit = () => {
  const medicalKits = [
    { id: 1, name: 'Bandages', logo: Bandages, hill: 20, price: 100 },
    { id: 2, name: 'Syringe', logo: Syringe, hill: 40, price: 100 },
    { id: 3, name: 'Pill', logo: Pill, hill: 30, price: 100 },
    { id: 4, name: 'Aid kit', logo: Aid_kit, hill: 80, price: 150 },
  ];
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

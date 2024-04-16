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
import style from '../Weapon/Weapon.module.css';

const Food = () => {
  const foods = [
    { id: 1, name: 'Mushroom', logo: Mushroom, hill: 15, price: 100 },
    { id: 2, name: 'Corn', logo: Corn, hill: 15, price: 100 },
    { id: 3, name: 'Pumpkin', logo: Pumpkin, hill: 15, price: 100 },
    { id: 4, name: 'Meat', logo: Meat, hill: 15, price: 100 },
    { id: 5, name: 'Apple', logo: Apple, hill: 15, price: 100 },
    { id: 6, name: 'Berry', logo: Berry, hill: 15, price: 100 },
    { id: 7, name: 'Chocolate', logo: Chocolate, hill: 15, price: 100 },
    { id: 8, name: 'Tinned', logo: Tinned, hill: 15, price: 100 },
    { id: 9, name: 'Can fish', logo: Can_fish, hill: 15, price: 100 },
    { id: 10, name: 'Canned food', logo: Canned_food, hill: 15, price: 100 },
  ];
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

import { useEffect, useState } from 'react';
import { useWebSocket } from '@shared/index';
import { initData } from '@shared/index';
import WeaponIcon from '../../../5shared/assets/icons/shop/weapon.png';
import ClothIcon from '../../../5shared/assets/icons/shop/cloth.png';
import MedicalKitIcon from '../../../5shared/assets/icons/shop/medicalKit.png';
import FoodIcon from '../../../5shared/assets/icons/shop/food.png';
import BuyIcon from '../../../5shared/assets/icons/shop/buy.png';
import SellIcon from '../../../5shared/assets/icons/shop/sell.png';
import ExitIcon from '../../../5shared/assets/icons/bar/exit.png';
import {
  weapons,
  equipment,
  foods,
  medicalKits,
} from '@shared/lib/Items/items';
import { useDispatch, useSelector } from 'react-redux';
import { selectWeapon } from '@shared/actions/actions';
import { RootState } from '@app/reducers/store';
import style from './ShopPage.module.css';

const ShopPage = () => {
  const ws = useWebSocket();
  const [showShopBuy, setShowShopBuy] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [shopItems, setShopItems] = useState<
    {
      id: number;
      img: string;
      action: string;
      block: JSX.Element | any;
    }[]
  >([]);

  useEffect(() => {
    const defaultShopItems = [
      { id: 1, img: WeaponIcon, action: 'Оружие', block: weapons },
      { id: 2, img: ClothIcon, action: 'Одежда', block: equipment },
      { id: 3, img: MedicalKitIcon, action: 'Медикаменты', block: medicalKits },
      { id: 4, img: FoodIcon, action: 'Еда', block: foods },
    ];
    setShopItems(defaultShopItems);
  }, []);

  const handleExit = () => {
    if (!ws) return;
    ws.send(
      JSON.stringify({
        userId: initData.user?.id,
        action: 'change_scene',
        payload: { scene: 'village_scene' },
      })
    );
  };

  const dispatch = useDispatch();
  const selectedWeapon = useSelector(
    (state: RootState) => state.weapon.selectedWeapon
  );
  const handleCheckWeapon = () => {
    if (selectedWeapon) {
      console.log('Оружие было успешно сохранено:', selectedWeapon);
    } else {
      console.log('Оружие не было сохранено');
    }
  };
  const handleBy = () => {
    dispatch(selectWeapon(equipment));
  };
  const handleAction = (id: number): void => {
    if (selectedItemId === id) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(id);
      /* dispatch(selectWeapon(weapons)); */
    }
  };

  const toggleShopBuy = () => {
    setShowShopBuy((prev) => !prev);
    setSelectedItemId(null);
  };

  return (
    <main className={style.shop}>
      <div className={style.buy}>
        <img
          className={style.icon}
          src={BuyIcon}
          alt='Buy'
          onClick={toggleShopBuy}
        />
        <div className={style.text}>Купить</div>
        {showShopBuy && (
          <div className={style.shop_buy}>
            {shopItems.map((item) => (
              <div key={item.id} className={style.item}>
                <img
                  className={style.icon_buy}
                  src={item.img}
                  alt={item.action}
                  onClick={() => handleAction(item.id)}
                />
                {item.action}
              </div>
            ))}
            {selectedItemId !== null && (
              <div
                onClick={() => handleBy()}
                className={`${
                  style[shopItems[selectedItemId - 1].action.toLowerCase()]
                } ${style.item_buy}`}
              >
                {shopItems[selectedItemId - 1].block.map((weapon: any) => (
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
                {shopItems[selectedItemId - 1].action === 'Одежда' &&
                  shopItems[selectedItemId - 1].block.map((cloth: any) => (
                    <div key={cloth.id} className={style.weaponCard}>
                      <img
                        src={cloth.logo}
                        alt={cloth.name}
                        className={style.weaponLogo}
                      />
                      <div className={style.weaponInfo}>
                        <h4 className={style.name}>{cloth.name}</h4>
                        <span className={style.characteristic}>
                          Armor: {cloth.damage}
                        </span>
                      </div>
                    </div>
                  ))}
                {shopItems[selectedItemId - 1].action === 'Медикаменты' &&
                  shopItems[selectedItemId - 1].block.map((medical: any) => (
                    <div key={medical.id} className={style.weaponCard}>
                      <img
                        src={medical.logo}
                        alt={medical.name}
                        className={style.weaponLogo}
                      />
                      <div className={style.weaponInfo}>
                        <h4 className={style.name}>{medical.name}</h4>
                        <span className={style.characteristic}>
                          Hill: {medical.damage}
                        </span>
                      </div>
                    </div>
                  ))}
                {shopItems[selectedItemId - 1].action === 'Еда' &&
                  shopItems[selectedItemId - 1].block.map((food: any) => (
                    <div key={food.id} className={style.weaponCard}>
                      <img
                        src={food.logo}
                        alt={food.name}
                        className={style.weaponLogo}
                      />
                      <div className={style.weaponInfo}>
                        <h4 className={style.name}>{food.name}</h4>
                        <span className={style.characteristic}>
                          Hill: {food.damage}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className={style.sell} onClick={handleCheckWeapon}>
        <img className={style.icon} src={SellIcon} alt='sell' />
        <div className={style.text}>Продать</div>
      </div>
      <div className={style.exit} onClick={handleExit}>
        <img className={style.icon} src={ExitIcon} alt='Exit' />
        <div className={style.text}>Выход</div>
      </div>
    </main>
  );
};
export default ShopPage;

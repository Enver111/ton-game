import { useEffect, useState } from 'react';
import { useWebSocket } from '@shared/index';
import { initData } from '@shared/index';
import style from './ShopPage.module.css';
import WeaponIcon from '../../../5shared/assets/icons/shop/weapon.png';
import ClothIcon from '../../../5shared/assets/icons/shop/cloth.png';
import MedicalKitIcon from '../../../5shared/assets/icons/shop/medicalKit.png';
import FoodIcon from '../../../5shared/assets/icons/shop/food.png';
import BuyIcon from '../../../5shared/assets/icons/shop/buy.png';
import SellIcon from '../../../5shared/assets/icons/shop/sell.png';
import ExitIcon from '../../../5shared/assets/icons/bar/exit.png';
import Weapon from '@shared/ui/Weapon/Weapon';
import Equipment from '@shared/ui/Equipment/Equipment';
import MedicalKit from '@shared/ui/MedicalKit/MedicalKit';
import Food from '@shared/ui/Food/Food';

const ShopPage = () => {
  const ws = useWebSocket();
  const [showShopBuy, setShowShopBuy] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [shopItems, setShopItems] = useState<
    {
      id: number;
      img: string;
      action: string;
      block: JSX.Element | null;
    }[]
  >([]);

  useEffect(() => {
    const defaultShopItems = [
      { id: 1, img: WeaponIcon, action: 'Оружие', block: <Weapon /> },
      { id: 2, img: ClothIcon, action: 'Одежда', block: <Equipment /> },
      {
        id: 3,
        img: MedicalKitIcon,
        action: 'Медикаменты',
        block: <MedicalKit />,
      },
      { id: 4, img: FoodIcon, action: 'Еда', block: <Food /> },
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

  const handleAction = (id: number) => {
    if (selectedItemId === id) {
      setSelectedItemId(null); // Скрыть блок при повторном клике на тот же элемент
    } else {
      setSelectedItemId(id);
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
                className={`${
                  style[shopItems[selectedItemId - 1].action.toLowerCase()]
                } ${style.item_buy}`}
              >
                {shopItems[selectedItemId - 1].action === 'Оружие' &&
                  shopItems[selectedItemId - 1].block}
                {shopItems[selectedItemId - 1].action === 'Одежда' &&
                  shopItems[selectedItemId - 1].block}
                {shopItems[selectedItemId - 1].action === 'Медикаменты' &&
                  shopItems[selectedItemId - 1].block}
                {shopItems[selectedItemId - 1].action === 'Еда' &&
                  shopItems[selectedItemId - 1].block}
              </div>
            )}
          </div>
        )}
      </div>

      <div className={style.sell}>
        <img className={style.icon} src={SellIcon} alt='sell' />
        <div className={style.text}>Продать</div>
      </div>
      <div className={style.exit} onClick={() => handleExit()}>
        <img className={style.icon} src={ExitIcon} alt='Exit' />
        <div className={style.text}>Выход</div>
      </div>
    </main>
  );
};
export default ShopPage;

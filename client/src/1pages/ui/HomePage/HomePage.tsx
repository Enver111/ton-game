import Bed from '../../../5shared/assets/icons/home/Bed.png';
import Fridge from '../../../5shared/assets/icons/home/Fridge.png';
import Box from '../../../5shared/assets/icons/home/Box.png';
import CraftingTable from '../../../5shared/assets/icons/home/Crafting table.png';
import style from './HomePage.module.css';
import ButtonExit from '@shared/ui/ButtonExit/ButtonExit';
import Crate from '@shared/assets/icons/home/Crate.png';
import { initData, useWebSocket } from '@shared/index';

const HomePage = () => {
  const itemsAction = [
    { id: 1, img: Bed, action: 'Кровать' },
    { id: 2, img: Fridge, action: 'Холодильник' },
    { id: 3, img: Crate, action: 'Ящик' },
    { id: 4, img: Box, action: 'Сундук' },
    { id: 5, img: CraftingTable, action: 'Верстак' },
  ];
  const ws = useWebSocket();
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
  return (
    <main className={style.home}>
      <div className={style.btn}>
        <ButtonExit handleExit={handleExit} />
      </div>
      <div className={style.wrap}>
        {itemsAction.map((item) => (
          <div
            key={item.id}
            className={style.actionItem}
            /* onClick={() => handleAction(item.action)} */
          >
            <img className={style.icon} src={item.img} alt={item.action} />
            <p className={style.text}>{item.action}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;

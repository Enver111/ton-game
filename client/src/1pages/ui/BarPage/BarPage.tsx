import Drink from '../../../5shared/assets/icons/bar/drinck.png';
import Exchange from '../../../5shared/assets/icons/bar/exchange1.png';
import Talk from '../../../5shared/assets/icons/bar/talk.png';
import style from './BarPage.module.css';
import { useState } from 'react';
import { initData, useWebSocket } from '@shared/index';

import ButtonExit from '@shared/ui/ButtonExit/ButtonExit';

const BarPage = ({ character }: { character: any }) => {
  const itemsAction = [
    { id: 1, img: Drink, action: 'Выпить' },
    { id: 2, img: Exchange, action: 'Обмен' },
    { id: 3, img: Talk, action: 'Диалог' },
  ];

  const [currentHealth, setcurrentHealth] = useState(
    character.stats.find(
      (stat: { name: string }) => stat.name === 'CURRENT_HIT_POINTS'
    ).value
  );

  const handleAction = (action: string) => {
    if (action === 'Выпить') {
      setcurrentHealth((hp: number) => hp - 20);
      console.log(currentHealth);
    }
  };
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
    <main className={style.bar}>
      <div className={style.btn}>
        <ButtonExit handleExit={handleExit} />
      </div>
      <div className={style.wrap}>
        {itemsAction.map((item) => (
          <div
            key={item.id}
            className={style.actionItem}
            onClick={() => handleAction(item.action)}
          >
            <img className={style.icon} src={item.img} alt={item.action} />
            <p className={style.text}>{item.action}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BarPage;

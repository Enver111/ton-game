import Exit from '../../../5shared/assets/icons/bar/exit.png';
import Drink from '../../../5shared/assets/icons/bar/drinck.png';
import Exchange from '../../../5shared/assets/icons/bar/exchange1.png';
import Talk from '../../../5shared/assets/icons/bar/talk.png';

import style from './BarPage.module.css';
import { useState } from 'react';
import { useWebSocket } from '@shared/index';
import { initData } from '@shared/index';

const itemsAction = [
  { id: 1, img: Drink, action: 'Выпить' },
  { id: 2, img: Exchange, action: 'Обмен' },
  { id: 3, img: Talk, action: 'Диалог' },
  { id: 4, img: Exit, action: 'Выход' },
];

const BarPage = ({ character }: { character: any }) => {
  const ws = useWebSocket();
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
    if (action === 'Выход') {
      if (!ws) return () => {};
      ws.send(
        JSON.stringify({
          userId: initData.user?.id,
          action: 'change_scene',
          payload: { scene: 'village_scene' },
        })
      );
    } /*  else {
      console.log('err');
    } */
  };
  return (
    <div>
      <main className={style.bar}>
        <div className={style.wrap}>
          {itemsAction.map((item) => (
            <div
              key={item.id}
              className={style.actionItem}
              onClick={() => handleAction(item.action)}
            >
              <img className={style.icon} src={item.img} alt={item.action} />
              <div className={style.text}>{item.action}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BarPage;

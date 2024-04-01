import { useWebSocket } from '@shared/index.ts';
import { initData } from '@shared/index.ts';
import { gameSceneLabels } from '@shared/enums/GameCommands';
import Button from '@shared/ui/Button/Button.tsx';

import BackpackIcon from '../../../5shared/assets/icons/icons/mainIcons/backpack1.png';
import BankIcon from '../../../5shared/assets/icons/icons/mainIcons/bank.png';
import BarIcon from '../../../5shared/assets/icons/icons/mainIcons/bar.png';
import ChariconIcon from '../../../5shared/assets/icons/icons/mainIcons/charicon1.png';
import FightIcon from '../../../5shared/assets/icons/icons/mainIcons/figth.png';
import HomeIcon from '../../../5shared/assets/icons/icons/mainIcons/home.png';
import ShopIcon from '../../../5shared/assets/icons/icons/mainIcons/shop.png';
import WarehouseIcon from '../../../5shared/assets/icons/icons/mainIcons/warehouse.png';

import style from './SettelementPage.module.css';

export default function SettlementPage({
  game,
}: {
  game: { availableScenes: string[] };
}) {
  const ws = useWebSocket();
  const callback = (scene: string) => {
    return () => {
      if (!ws) return () => {};
      ws.send(
        JSON.stringify({
          userId: initData.user?.id,
          action: 'change_scene',
          payload: { scene: scene },
        })
      );
    };
  };

  const mainIcons: { [key: string]: string } = {
    bar_scene: BarIcon,
    shop_scene: ShopIcon,
    warehouse_scene: WarehouseIcon,
    home_scene: HomeIcon,
    bank_scene: BankIcon,
    player_scene: ChariconIcon,
    inventory_scene: BackpackIcon,
    routes_scene: FightIcon,
  };

  return (
    <main className={style.main}>
      <h1>Settlement</h1>
      <div className={style.action}>
        {game.availableScenes.map((scene: string, index: number) => {
          return (
            <div className={style.attributes} key={index}>
              {mainIcons[scene] && (
                <img
                  className={style.icon}
                  src={mainIcons[scene]}
                  alt={scene}
                  onClick={callback(scene)}
                />
              )}
              <div>{gameSceneLabels[scene]}</div>
            </div>
          );
        })}
      </div>
    </main>
  );

  {
    /* </div>
            <Button
              key={index}
              text={gameSceneLabels[scene]}
              size={'md'}
              callback={callback(scene)}
            /> */
  }
}

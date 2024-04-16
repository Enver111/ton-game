import { initData, useWebSocket } from '@shared/index';
import ButtonExit from '@shared/ui/ButtonExit/ButtonExit';
import Char from '../../../5shared/assets/icons/char.svg';
import style from './InventoryPage.module.css';

const InventoryPage = () => {
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
    <main className={style.inventory}>
      <div className={style.btn}>
        <ButtonExit handleExit={handleExit} />
      </div>
      <div className={style.wrap}>
        <div className={style.char}>
          <img className={style.char_icon} src={Char} alt='char' />
          <div className={style.head}>head</div>
          <div className={style.torso}>torso</div>
          <div className={style.hands}>hands</div>
          <div className={style.legs}>legs</div>
          <div className={style.feet}>feet</div>
        </div>
      </div>
    </main>
  );
};

export default InventoryPage;

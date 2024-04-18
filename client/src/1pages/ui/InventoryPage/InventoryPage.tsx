import React, { useState } from 'react';
import { initData, useWebSocket } from '@shared/index';
import ButtonExit from '@shared/ui/ButtonExit/ButtonExit';
import Char from '../../../5shared/assets/icons/char.svg';
import style from './InventoryPage.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@app/reducers/store';
import { weapons } from '@shared/lib/Items/items';

const InventoryPage: React.FC = () => {
  const selectedWeapon: any = useSelector(
    (state: RootState) => state.weapon.selectedWeapon
  );
  type SelectedWeaponType = typeof selectedWeapon;
  interface Block {
    id: string;
    weapons: SelectedWeaponType[];
  }
  const [blocks, setBlocks] = useState<Block[]>([
    { id: 'block1', weapons: [] },
    { id: 'block2', weapons: [] },
    { id: 'block3', weapons: [] },
    { id: 'block4', weapons: [] },
    { id: 'block5', weapons: [] },
    { id: 'block6', weapons: [] },
    { id: 'block7', weapons: [] },
    { id: 'block8', weapons: [] },
  ]);
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

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    weapon: SelectedWeaponType
  ) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(weapon));
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    blockId: string
  ) => {
    event.preventDefault();
    const data = JSON.parse(
      event.dataTransfer.getData('text/plain')
    ) as SelectedWeaponType;
    const updatedBlocks = blocks.map((block) => {
      if (block.id === blockId) {
        return { ...block, weapons: [...block.weapons, data] };
      }
      return block;
    });
    setBlocks(updatedBlocks);
  };

  return (
    <main className={style.inventory}>
      <div className={style.btn}>
        <ButtonExit handleExit={handleExit} />
      </div>
      <div className={style.wrap}>
        <img className={style.char_icon} src={Char} alt='char' />
        <div className={style.char}>
          {blocks.map((block) => (
            <div
              className={style.amunation}
              key={block.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, block.id)}
            >
              <ul className={style.amunation_list}>
                {block.weapons.map((weapon) => (
                  <li key={weapon.id}>
                    <img className={style.logo} src={weapon.logo} alt='logo' />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={style.loot}>
        {Array.isArray(selectedWeapon) &&
          selectedWeapon.map((weapon: any) => (
            <div
              className={style.loot_info}
              key={weapon.id}
              draggable
              onDragStart={(e) => handleDragStart(e, weapon)}
            >
              <img className={style.logo} src={weapon.logo} alt='logo' />
              <p>{weapon.name}</p>
              <p>{weapon.damage}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export default InventoryPage;

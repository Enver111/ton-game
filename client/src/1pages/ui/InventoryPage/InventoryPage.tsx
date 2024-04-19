import React, { useState } from 'react';
import { initData, useWebSocket } from '@shared/index';
import ButtonExit from '@shared/ui/ButtonExit/ButtonExit';
import Char from '../../../5shared/assets/icons/char.svg';
import style from './InventoryPage.module.css';
import ItemsRender from '@shared/lib/Items/ItemsRender';

interface Item {
  id: string;
  logo: string;
}
interface Block {
  id: string;
  items: Item[];
}
const InventoryPage: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: 'block1', items: [] },
    { id: 'block2', items: [] },
    { id: 'block3', items: [] },
    { id: 'block4', items: [] },
    { id: 'block5', items: [] },
    { id: 'block6', items: [] },
    { id: 'block7', items: [] },
    { id: 'block8', items: [] },
  ]);
  const ws = useWebSocket();
  const handleExit = () => {
    if (!ws) {
      console.error('WebSocket is not available');
      return;
    }
    ws.send(
      JSON.stringify({
        userId: initData.user?.id,
        action: 'change_scene',
        payload: { scene: 'village_scene' },
      })
    );
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    blockId: string
  ) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData('text/plain')) as any;
    const updatedBlocks = blocks.map((block) => {
      if (block.id === blockId) {
        return { ...block, items: [...block.items, data] };
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
                {block.items.map((items: any) => (
                  <li key={items.id}>
                    <img
                      className={style.logo}
                      src={items.logo}
                      alt={`Logo of ${items.name}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={style.loot}>
        <ItemsRender />
      </div>
    </main>
  );
};

export default InventoryPage;

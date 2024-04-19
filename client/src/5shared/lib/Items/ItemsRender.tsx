import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../0app/reducers/store';
import style from './ItemsRender.module.css';

const ItemsRender = () => {
  interface Item {
    id: string;
    logo: string;
    name: string;
    damage: number;
  }
  const selectedItems: Item[] = useSelector(
    (state: RootState) => state.shop.selectedItems
  );

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    items: Item
  ) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(items));
  };
  return (
    <>
      {Array.isArray(selectedItems) &&
        selectedItems.map((item: any) => (
          <div
            className={style.loot_info}
            key={item.id}
            onDragStart={(e) => handleDragStart(e, item)}
          >
            <img
              className={style.logo}
              src={item.logo}
              alt={`Logo of ${item.name}`}
            />
            <p>{item.name}</p>
            <p>{item.damage}</p>
          </div>
        ))}
    </>
  );
};

export default ItemsRender;

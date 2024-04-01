import React from 'react';
import Cash from '../../../5shared/assets/icons/money.png';
import style from './Money.module.css';

interface MoneyProps {
  value: number;
}

const Money: React.FC<MoneyProps> = ({ value }) => {
  const money: number = value;

  return (
    <div className={style.money}>
      <div className={style.icon} data-value={money}>
        <img className={style.icon_img} src={Cash} alt='money' />
      </div>
      <p className={style.money}>{money}</p>
    </div>
  );
};

export default Money;

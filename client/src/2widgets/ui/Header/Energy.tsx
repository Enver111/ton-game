import React from 'react';
import style from './Energy.module.css';

interface EnergyProps {
  value: number;
  max: number;
  color1: string;
  color2: string;
  icon: string;
}

const Energy: React.FC<EnergyProps> = ({
  value,
  max,
  color1,
  color2,
  icon,
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className={style.energy}>
      <img className={style.energy_icon} src={icon} alt='icon' />
      <div
        style={{
          margin: 'auto 0',
          border: '1px solid black',
          background: '#292626',
          width: '100px',
          borderRadius: '10px',
          height: '18px',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(to right, ${color1}, ${color2})`,
            borderRadius: '10px',
            height: '18px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Energy;

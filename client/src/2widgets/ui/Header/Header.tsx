import Energy from './Energy';
import Health from '../../../5shared/assets/icons/health.png';
import Ligtning from '../../../5shared/assets/icons/lightning.png';
import Money from './Money';
import style from './Header.module.css';

export default function Header({ character }: { character: any }) {
  const currentHealth = character.stats.find(
    (stat: { name: string }) => stat.name === 'CURRENT_HIT_POINTS'
  ).value;
  /* const maxHealth = character.stats.find(
    (stat: { name: string }) => stat.name === 'MAXIMUM_HIT_POINTS'
  ).value; */
  const fatique = character.stats.find(
    (stat: { name: string }) => stat.name === 'FATIQUE'
  ).value;

  return (
    <header className={style.header}>
      <Energy
        icon={Health}
        color1={'#550000'}
        color2={'red'}
        value={currentHealth}
        max={100}
      />
      <Energy
        icon={Ligtning}
        color1={'#8c4d00'}
        color2={'#f9b35d'}
        value={100 - fatique}
        max={100}
      />
      <Money value={character.balance} />
    </header>
  );
}

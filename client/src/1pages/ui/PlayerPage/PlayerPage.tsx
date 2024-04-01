import Scale from '@shared/ui/Scale/Scale';
import StrengthIcon from '../../../5shared/assets/icons/playerIcons/STRENGTH.png';
import PerceptionIcon from '../../../5shared/assets/icons/playerIcons/PERCEPTION.png';
import EnduranceIcon from '../../../5shared/assets/icons/playerIcons/ENDURANCE.png';
import CharismaIcon from '../../../5shared/assets/icons/playerIcons/CHARISMA.png';
import IntelligenceIcon from '../../../5shared/assets/icons/playerIcons/INTELLIGENCE.png';
import AgilityIcon from '../../../5shared/assets/icons/playerIcons/AGILITY.png';
import LuckIcon from '../../../5shared/assets/icons/playerIcons/LUCK.png';

import style from './PlayerPage.module.css';

const attributeIcons: { [key: string]: string } = {
  STRENGTH: StrengthIcon,
  PERCEPTION: PerceptionIcon,
  ENDURANCE: EnduranceIcon,
  CHARISMA: CharismaIcon,
  INTELLIGENCE: IntelligenceIcon,
  AGILITY: AgilityIcon,
  LUCK: LuckIcon,
};

export default function PlayerPage({ player }: { player: any }) {
  return (
    <main className={style.player}>
      <div className={style.wrap}>
        {player.attributes.map(
          (attr: { name: string; value: number }, index: number) => (
            <div className={style.attributes} key={index}>
              {attributeIcons[attr.name] && (
                <img
                  className={style.icon}
                  src={attributeIcons[attr.name]}
                  alt={attr.name}
                />
              )}
              <Scale meaning={attr.value} />
            </div>
          )
        )}
      </div>
      <div>
        {player.stats.map(
          (attr: { name: string; value: number }, index: number) => {
            return (
              <div key={index}>
                <span>{attr.name}</span>
                <Scale meaning={attr.value} />
                {/*    <span>{attr.value}</span> */}
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}

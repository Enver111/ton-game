import Scale from '@shared/ui/Scale/Scale';
import StrengthIcon from '../../../5shared/assets/icons/playerIcons/STRENGTH.png';
import PerceptionIcon from '../../../5shared/assets/icons/playerIcons/PERCEPTION.png';
import EnduranceIcon from '../../../5shared/assets/icons/playerIcons/ENDURANCE.png';
import CharismaIcon from '../../../5shared/assets/icons/playerIcons/CHARISMA.png';
import IntelligenceIcon from '../../../5shared/assets/icons/playerIcons/INTELLIGENCE.png';
import AgilityIcon from '../../../5shared/assets/icons/playerIcons/AGILITY.png';
import LuckIcon from '../../../5shared/assets/icons/playerIcons/LUCK.png';

import MaxHitPoints from '../../../5shared/assets/icons/playerIcons/tom2/HitPoints.png';
import MaxActionPoints from '../../../5shared/assets/icons/playerIcons/tom2/ActionPoints.png';
import ArmorClass from '../../../5shared/assets/icons/playerIcons/tom2/ArmorClass.png';
import MeleeDamage from '../../../5shared/assets/icons/playerIcons/tom2/MeleeDamage.png';
import CarryWeight from '../../../5shared/assets/icons/playerIcons/tom2/CarryWeight.png';
import Sequence from '../../../5shared/assets/icons/playerIcons/tom2/Sequence.png';
import HealingRate from '../../../5shared/assets/icons/playerIcons/tom2/HealingRate.png';
import CriticalChance from '../../../5shared/assets/icons/playerIcons/tom2/CriticalChance.png';
import RadiationResistance from '../../../5shared/assets/icons/playerIcons/tom2/RadiationResistance.png';
import Age from '../../../5shared/assets/icons/playerIcons/tom2/Age.png';
import Gender from '../../../5shared/assets/icons/playerIcons/tom2/Gender.png';
import CurrentHitPoins from '../../../5shared/assets/icons/playerIcons/tom2/CurrentHitPoins.png';
import CurrentRadiationLevel from '../../../5shared/assets/icons/playerIcons/tom2/CurrentRadiationLevel.png';
import CurrentActionPoint from '../../../5shared/assets/icons/playerIcons/tom2/CurrentActionPoint.png';
import UnspentSkillPoint from '../../../5shared/assets/icons/playerIcons/tom2/UnspentSkillPoint.png';
import Level from '../../../5shared/assets/icons/playerIcons/tom2/Level.png';
import Experience from '../../../5shared/assets/icons/playerIcons/tom2/Experience.png';
import Reputation from '../../../5shared/assets/icons/playerIcons/tom2/Reputation.png';
import Karma from '../../../5shared/assets/icons/playerIcons/tom2/Karma.png';
import Fatique from '../../../5shared/assets/icons/playerIcons/tom2/Fatique.png';

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

const statsIcon: { [key: string]: string } = {
  MAXIMUM_HIT_POINTS: MaxHitPoints,
  MAXIMUM_ACTION_POINTS: MaxActionPoints,
  ARMOR_CLASS: ArmorClass,
  MELEE_DAMAGE: MeleeDamage,
  CARRY_WEIGHT: CarryWeight,
  SEQUENCE: Sequence,
  HEALING_RATE: HealingRate,
  CRITICAL_CHANCE: CriticalChance,
  RADIATION_RESISTANCE: RadiationResistance,
  AGE: Age,
  GENDER: Gender,
  CURRENT_HIT_POINTS: CurrentHitPoins,
  CURRENT_RADIATION_LEVEL: CurrentRadiationLevel,
  CURRENT_ACTION_POINTS: CurrentActionPoint,
  UNSPENT_SKILL_POINTS: UnspentSkillPoint,
  LEVEL: Level,
  EXPERIENCE: Experience,
  REPUTATION: Reputation,
  KARMA: Karma,
  FATIQUE: Fatique,
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
              <div className={style.info}>{attr.name}</div>
              <Scale meaning={100} />
            </div>
          )
        )}
      </div>
      <div className={style.stats_wrap}>
        {player.stats.map(
          (attr: { name: string; value: number }, index: number) => {
            return (
              <div className={style.stats} key={index}>
                {statsIcon[attr.name] && (
                  <img
                    className={style.icon}
                    src={statsIcon[attr.name]}
                    alt={attr.name}
                  />
                )}
                <span className={style.info}>{attr.name}</span>
                <div className={style.text}>{attr.value}</div>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}

import Scale from '@shared/ui/Scale/Scale';
import { attributeIcons, statsIcon } from '@shared/enums/GameIcons';
import style from './PlayerPage.module.css';

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
              <span className={style.info}>{attr.name}</span>
              <Scale meaning={attr.value} />
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
                <span className={style.text}>{attr.value}</span>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}

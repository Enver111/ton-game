import Scale from '@shared/ui/Scale/Scale';
import { attributeIcons, statsIcon } from '@shared/enums/GameIcons';
import style from './PlayerPage.module.css';
import ButtonExit from '@shared/ui/ButtonExit/ButtonExit';
import { initData, useWebSocket } from '@shared/index';

export default function PlayerPage({ player }: { player: any }) {
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
    <main className={style.player}>
      <div className={style.btn}>
        <ButtonExit handleExit={handleExit} />
      </div>
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

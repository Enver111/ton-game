import { useWebSocket } from '@shared/index.ts';
import { initData } from '@shared/index.ts';
import { gameSceneLabels } from '@shared/enums/GameCommands';
import Button from '@shared/ui/Button/Button.tsx';
import style from './SettelementPage.module.css';
export default function SettlementPage({
  game,
}: {
  game: { availableScenes: string[] };
}) {
  const ws = useWebSocket();
  const callback = (scene: string) => {
    return () => {
      if (!ws) return () => {};
      ws.send(
        JSON.stringify({
          userId: initData.user?.id,
          action: 'change_scene',
          payload: { scene: scene },
        })
      );
    };
  };

  return (
    <main className={style.main}>
      <h1>Settlement</h1>
      <div className={style.action}>
        {game.availableScenes.map((scene: string, index: number) => {
          return (
            <Button
              key={index}
              text={gameSceneLabels[scene]}
              size={'md'}
              callback={callback(scene)}
            />
          );
        })}
      </div>
    </main>
  );
}

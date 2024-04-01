import { gameSceneLabels } from '@shared/enums/GameCommands';
import { initData, useWebSocket } from '@shared/index';
import Button from '@shared/ui/Button/Button';
import Scale from '@shared/ui/Scale/Scale';

export default function RoutesPage({
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
          action: 'village_scene',
          payload: { scene: scene },
        })
      );
    };
  };
  return (
    <main>
      <h1>Action</h1>
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
      <Scale meaning={45} />
    </main>
  );
}

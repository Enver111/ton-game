import { useSelector } from 'react-redux';
import { RootState } from '@app/reducers/store';
const RoutesPage = () => {
  const selectedWeapon = useSelector(
    (state: RootState) => state.weapon.selectedWeapon
  );
  return (
    <main>
      <div>
        {Array.isArray(selectedWeapon) &&
          selectedWeapon.map((item: any) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </main>
  );
};

export default RoutesPage;

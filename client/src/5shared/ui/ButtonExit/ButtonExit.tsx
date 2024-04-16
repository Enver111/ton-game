import Exit from '../../assets/icons/bar/exit.png';

import style from './ButtonExit.module.css';

type ButtonExitProps = {
  handleExit: () => void;
};
const ButtonExit = ({ handleExit }: ButtonExitProps) => {
  return (
    <button onClick={handleExit} className={style.btn}>
      <img className={style.icon} src={Exit} alt='exit' />
      <p className={style.text}></p>
    </button>
  );
};
export default ButtonExit;

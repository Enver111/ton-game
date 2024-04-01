import style from './Scale.module.css';

const Scale = ({ meaning }: { meaning: number }) => {
  const numBars = Math.max(Math.ceil(meaning / 5), 1);

  return (
    <div className={style.scale}>
      {[...Array(numBars)].map((_, index) => (
        <div key={index} className={style.segment} />
      ))}
    </div>
  );
};

export default Scale;

/* eslint-disable react/prop-types */
import style from "./App.module.css";
import { Field, Info } from "./components";

export const AppLayout = ({ props }) => {
  const { field, currentPlayer, win, draw, handleReset, handleClick } = props;
  return (
    <div className={style.container}>
      <div className={style.game}>
        <Info currentPlayer={currentPlayer} draw={draw} win={win} />
        <Field field={field} onClick={handleClick} />
        <button className={style.reset} onClick={handleReset}>
          Начать заново
        </button>
      </div>
    </div>
  );
};

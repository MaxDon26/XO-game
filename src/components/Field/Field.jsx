/* eslint-disable react/prop-types */
import { getPath } from "../../utils/getImagePath";
import style from "./Field.module.css";

const FieldLayout = ({ field, onClick }) => {
  return (
    <div className={style.field}>
      {field.map((cell, ind) => (
        <button onClick={() => onClick(ind)} className={style.cell} key={ind}>
          {cell && <img draggable={false} src={getPath(cell)} alt="figure" />}
        </button>
      ))}
    </div>
  );
};

export const Field = (props) => {
  return <FieldLayout {...props} />;
};

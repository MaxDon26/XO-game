import { XO } from "../../utils/figure";
import styles from "./field.module.css";

export const FieldLayout = ({ field, onClick }) => {
  return (
    <div className={styles.fields}>
      {field.map((f, idx) => (
        <button key={idx} onClick={() => onClick(idx)} className={styles.field}>
          {f && XO(f)}
        </button>
      ))}
    </div>
  );
};

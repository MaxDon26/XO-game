import { useState } from "react";
import { field as initialState } from "./constants/field";
import { AppLayout } from "./App-layout";
import { isDrow as checkDrow, isWin } from "./utils/check";

function App() {
  const [field, setField] = useState(initialState);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [isDrow, setIsDrow] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleReset = () => {
    setField(initialState);
    setIsDrow(false);
    setIsGameEnd(false);
    setCurrentPlayer("X");
  };

  const handleClick = (idx) => {
    if (isDrow || isGameEnd) return;

    const newField = field.map((f, index) =>
      index === idx ? currentPlayer : f
    );

    setField(newField);

    if (isWin(newField, currentPlayer)) {
      setIsGameEnd(true);
      return;
    }

    if (checkDrow(newField)) {
      setIsDrow(true);
      return;
    }

    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  return (
    <AppLayout
      props={{
        field,
        currentPlayer,
        isGameEnd,
        isDrow,
        handleReset,
        handleClick,
      }}
    />
  );
}

export default App;

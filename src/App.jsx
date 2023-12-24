import { useState } from "react";
import { AppLayout } from "./App-layout";
import { field as initilalField } from "./constans/field";
import * as check from "./utils/check.js";

function App() {
  const [field, setField] = useState(initilalField);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);

  const handleClick = (index) => {
    if (field[index] || win || draw) return;

    const newField = field.map((cell, idx) =>
      idx === index ? currentPlayer : cell
    );

    setField(newField);

    if (check.isWin(newField, currentPlayer)) {
      setWin(true);
      return;
    }
    if (check.isDraw(newField)) {
      setDraw(true);
      return;
    }

    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  const handleReset = () => {
    setField(initilalField);
    setWin(false);
    setDraw(false);
    setCurrentPlayer("X");
  };

  return (
    <AppLayout
      props={{ field, currentPlayer, win, draw, handleReset, handleClick }}
    />
  );
}

export default App;

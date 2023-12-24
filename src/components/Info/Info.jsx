/* eslint-disable react/prop-types */
import React from "react";
import style from "./Info.module.css";

export const Info = ({ draw, win, currentPlayer }) => {
  const status = win
    ? `Победил ${currentPlayer}`
    : draw
    ? "Ничья"
    : `Ходит ${currentPlayer}`;
  return <InfoLayout status={status} />;
};

const InfoLayout = ({ status }) => {
  return <div className={style.info}>{status}</div>;
};

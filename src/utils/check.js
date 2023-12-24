import { WIN_PATTERNS } from "../constans/win-patterns";

export const isDraw = (field) => field.every((cell) => cell);

export const isWin = (field, currentPlayer) =>
  WIN_PATTERNS.some((pattern) =>
    pattern.every((ind) => field[ind] === currentPlayer)
  );

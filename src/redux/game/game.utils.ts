import { Board, Game } from '../../types/Game';
import { PlayerEnum } from '../../types/Player';

const winConditions = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],
    ['00', '11', '22'],
    ['02', '11', '20']
];
// Compromize => no documentation
export const checkWin = (board: Board): string[] | null => {
    let win = null;
    winConditions.forEach((winCondition) => {
        const p1HasWon =
            board[winCondition[0]] === 1 &&
            board[winCondition[1]] === 1 &&
            board[winCondition[2]] === 1;
        const p2HasWon =
            board[winCondition[0]] === 2 &&
            board[winCondition[1]] === 2 &&
            board[winCondition[2]] === 2;
        if (p1HasWon || p2HasWon) {
            win = winCondition;
        }
    });
    return win;
};

// Compromize => no documentation
export const checkDraw = (board: Board): boolean => {
    if (Object.keys(board).length === 9) {
        if (
            Object.values(board).every(
                (cell) =>
                    cell === PlayerEnum.PLAYER_ONE ||
                    cell === PlayerEnum.PLAYER_TWO
            )
        ) {
            return true;
        }
    }
    return false;
};

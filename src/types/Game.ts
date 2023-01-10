import { PlayerEnum } from './Player';

export type Game = {
    turn: number;
    playersturn: PlayerEnum;
    board: Board;
    finished: boolean;
    winCondition: string[] | null;
    draw?: boolean;
};

export type Board = {
    [x: string]: PlayerEnum;
};

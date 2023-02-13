// player.store.js
import React from 'react';
import {action, observable, makeObservable} from 'mobx';
import {PlayerEnum} from '../../types/Player';
import {Game} from '../../types/Game';
import {checkDraw, checkWin} from './game.utils';

class GameStore {
    game: Game = {
        turn: 1,
        playersturn: PlayerEnum.PLAYER_ONE,
        board: {},
        finished: false,
        winCondition: null
    };

    constructor() {
        makeObservable(this, {
            game: observable,
            play: action.bound,
            restart: action
        });
    }

    play(game: Game) {
        this.game.board = game.board;
        const winCondition = checkWin(this.game.board);
        if (winCondition) {
            this.game.finished = true;
            this.game.winCondition = winCondition;
        }
        if (!this.game.finished) {
            if (checkDraw(this.game.board)) {
                this.game.draw = true;
                this.game.finished = true;
            }
        }

        if (!this.game.finished) {
            this.game.playersturn =
                this.game.playersturn === PlayerEnum.PLAYER_ONE
                    ? PlayerEnum.PLAYER_TWO
                    : PlayerEnum.PLAYER_ONE;
        }
    }

    restart() {
        this.game = {
            ...this.game,
            board: {},
            finished: false,
            draw: false,
            turn: this.game.turn + 1,
            winCondition: null,
            playersturn:
                this.game.playersturn === PlayerEnum.PLAYER_ONE
                    ? PlayerEnum.PLAYER_TWO
                    : PlayerEnum.PLAYER_ONE
        };
    }
}

const gameStore = new GameStore();
export const GameStoreContext = React.createContext(gameStore);
export const useGameStore = () => React.useContext(GameStoreContext);

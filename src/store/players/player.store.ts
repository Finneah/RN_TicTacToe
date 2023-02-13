// player.store.js
import React from 'react';
import {makeObservable, action, observable} from 'mobx';
import {Player} from '../../types/Player';

class PlayerStore {
    players: Player[] = [];

    constructor() {
        makeObservable(this, {
            players: observable,
            setPlayers: action.bound
        });
    }
    setPlayers(data: Player[]) {
        this.players = data;
    }
}

const playerStore = new PlayerStore();

export const PlayerStoreContext = React.createContext(playerStore);
export const usePlayerStore = () => React.useContext(PlayerStoreContext);

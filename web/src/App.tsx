import './App.scss'

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import { ROUTES, MUNCHKIN, MUNCHKIN_QTD_PLAYERS } from './constants';
import { verificaPeriodoAtualDoDia } from './utils';
import { Home, Player, GameScreen, Rules } from './ui/screens';

import { PlayerType } from './types';

export function App() {
  const gameStorage:  any  =  localStorage.getItem(MUNCHKIN) || false;
  const qtdPlayers:   any  =  localStorage.getItem(MUNCHKIN_QTD_PLAYERS) || false;
  const gameStorageData: any = gameStorage ? JSON?.parse(gameStorage) : [];

  const [players, setPlayers] = useState<PlayerType[]>(gameStorageData);
  let horario: string = verificaPeriodoAtualDoDia()

  return (
    <div className={`${horario}`}>
      <Routes>

        <Route
          path={ROUTES.HOME_PAGE.path} 
          element={ <Home players={players} setPlayers={setPlayers} /> }
        />

        <Route
          path={ROUTES.PLAYERS_PAGE.path}
          element={ <Player qtdPlayers={qtdPlayers} players={players} setPlayers={setPlayers} /> }
        />

        <Route
          path={ROUTES.GAME_PAGE.path}
          element={
            <GameScreen 
              players={players}
              setPlayers={setPlayers}
              gameStorage={gameStorage}
              qtdPlayers={qtdPlayers}
            />
          }
        />

        <Route
          path={ROUTES.RULES_PAGE.path}
          element={
            <Rules />
          }
        />
      </Routes>
    </div>
  )
}

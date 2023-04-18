import './game.style.scss';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants';

import type { PlayerType } from '../../../types';

export function GameScreen({ players, setPlayers, gameStorage, howMuchPlayers }: any) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!gameStorage) {
            navigate(ROUTES.HOME_PAGE.path);
        }
    }, [])

    console.log(gameStorage)

    const mapperPlayers: any = players?.map((player: PlayerType, index: number) => {
        return (
            <div key={index}>
                <h3>{player.ordem + 1}</h3>
                <h3>{player.nome}</h3>
            </div>
        )
    })

    return (
        <div>
            {mapperPlayers}
        </div>
    )
}
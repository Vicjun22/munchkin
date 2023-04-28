import './game.style.scss';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { CompleteAttributesCard } from '../../components';
import { PlayerType } from '../../../types';

export function GameScreen({ qtdPlayers, players, setPlayers, gameStorage }: any) {
    const [ordemAtual, setOrdemAtual] = useState<number>(0);
    const navigate = useNavigate()

    const playerAtual: PlayerType = players.find((player: PlayerType) => player.ordem === ordemAtual);

    useEffect(() => {
        if (!gameStorage) {
            navigate(ROUTES.HOME_PAGE.path);
        }
    }, [])

    return (
        <section className={'section_game'}>
            <CompleteAttributesCard
                player={playerAtual}
                players={players}
                setPlayers={setPlayers}
                setOrdemAtual={setOrdemAtual}
            />
        </section>
    )
}

import './game.style.scss';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants';

export function GameScreen({ qtdPlayers, players, setPlayers, gameStorage }: any) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!gameStorage) {
            navigate(ROUTES.HOME_PAGE.path);
        }
    }, [])

    return (
        <section className={'section_game'}>
            
        </section>
    )
}
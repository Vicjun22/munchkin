import './game.style.scss';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { Title } from '../../components';
import { PlayerType } from '../../../types';

import HumanF from '../../../assets/images/munchkin_human-female.svg'
import HumanM from '../../../assets/images/munchkin_human-male.svg'

export function GameScreen({ qtdPlayers, players, setPlayers, gameStorage }: any) {
    const [ordemAtual, setOrdemAtual] = useState<number>(0);
    const navigate = useNavigate();
    
    const playerAtual: any = players.find((player: PlayerType) => player.ordem === ordemAtual);

    const imagem: any = {
        'Humano-feminino': HumanF,
        'Humano-masculino': HumanM
    }

    useEffect(() => {
        if (!gameStorage) {
            navigate(ROUTES.HOME_PAGE.path);
        }
    }, [])

    // ver completeAttributesCard.component e depois apagar...

    return (
        <section className={'section_game'}>
            <Title />

            <div className={'section_game_container'}>
                <div className={'section_game_img-div'}>
                    
                    <img
                        src={imagem[playerAtual.racaGenero]}
                        alt={'Imagem do jogador'}
                        className={'section_game_img'}
                    />
                </div>

                <div className={'section_game_data-div'}>

                </div>
            </div>
        </section>
    )
}

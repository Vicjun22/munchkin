import './player.style.scss';

import { useEffect, useState } from 'react';

import { Title, CreatePlayer, CreateCard, ExitModal } from '../../components';
import { MUNCHKIN } from '../../../constants';
import { ThickArrowDownIcon } from '@radix-ui/react-icons';

export function Player({ players, setPlayers, qtdPlayers }: any) {
    const [openModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem(MUNCHKIN, JSON.stringify(players));
    }, [players])

    return (
        <section className={'section_players'}>
            <div className={'section_players_container'}>
                <Title />

                <CreatePlayer 
                    players={players}
                    setPlayers={setPlayers}
                    qtdPlayers={qtdPlayers}
                    setOpenModal={setOpenModal}
                />
                
                { players.length !== 0 &&
                <div className={'section_players_player-created'}>
                    <ThickArrowDownIcon style={{width: '50%', height: '50%'}} />
                </div> }

            </div>

            <div className={`section_players_container-cards section_players_${players.length}-cards`}>
                
                <CreateCard
                    players={players}
                    setPlayers={setPlayers}
                    qtdPlayers={qtdPlayers}
                />

            </div>
            
            {openModal && <ExitModal setOpenModal={setOpenModal} />}
        </section>
    )
}
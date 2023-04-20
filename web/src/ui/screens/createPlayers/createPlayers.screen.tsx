import './createPlayers.style.scss';

import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import { Button, Cards, CreateCard, ExitModal, Title } from '../../components';
import { MUNCHKIN, ROUTES } from '../../../constants';

import FemaleAvatar from '../../../assets/images/human-female.svg';
import MaleAvatar from '../../../assets/images/human-male.svg';

import type { PlayerType } from '../../../types';

export function CreatePlayers({ players, setPlayers, qtdPlayers }: any) {
    const [openModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem(MUNCHKIN, JSON.stringify(players));
    }, [players])


    // const navigate: NavigateFunction = useNavigate();

    // function handleSortearOrdem(event: any) {
    //     event.preventDefault();
    //     const arrayAtualizado = [...players];
    //     arrayAtualizado.forEach((player) => (player.ordem = Math.random()));
    //     arrayAtualizado.sort((a, b) => a.ordem - b.ordem);
    //     arrayAtualizado.forEach((objeto, index) => (objeto.ordem = index));
    //     setPlayers(arrayAtualizado);
    // }

    // function handleStart(event: any) {
    //     event.preventDefault();
    //     const playersComPropriedades = players.map((player: PlayerType) => ({
    //         ...player
    //         , nivel: 1
    //         , dinheiro: 0
    //         , duasRacas: false
    //         , raca1: 'humano'
    //         , duasClasses: false
    //         , chapeu: 0
    //         , armadura: 0
    //         , armaDeDuasMaos: false
    //         , mao1: 0
    //         , mao2: 0
    //         , calcado: 0
    //         , montaria: 0
    //     }));
    //     setPlayers(playersComPropriedades);
    //     navigate(ROUTES.GAME_PAGE.path);
    // }



    return (
        <section className={'section_create-players'}>
            <div className={'section_create-players_container'}>
                <Title />

                <CreateCard 
                    players={players}
                    setPlayers={setPlayers}
                    qtdPlayers={qtdPlayers}
                    setOpenModal={setOpenModal}
                />
            </div>

            <div className={`section_create-players_container-cards section_create-players_${players.length}-cards`}>
                
                <Cards
                    players={players}
                    setPlayers={setPlayers}
                    qtdPlayers={qtdPlayers}
                />

            </div>
            
            {openModal && <ExitModal setOpenModal={setOpenModal} />}
        </section>








            /* 
                <Button
                    id={'cy_create-players-card_button'}
                    type={'submit'}
                    disabled={nomeJogador === '' || players.length === 6 || genero === ''}
                >
                    {howMuchPlayers === 'only-one' ? 'Jogar' : 'Adicionar'}
                </Button>
            </form>

            {howMuchPlayers === 'a-lot' ?
                <>
                    <div className={'create-players-card create-players-card_mobile'}>
                        <div className={'create-players-card_data'}>
                            {mapperPlayers}
                        </div> 
                            <Button
                                id={'cy_create-players-card_random-button'}
                                onClick={(event) => handleSortearOrdem(event)}
                                disabled={players.length < 3}
                            >
                                Trocar Ordem
                            </Button>
                    </div>

                    <div className={'create-players-card_start-button'}>
                        <Button
                            id={'cy_create-players-card_start-button'}
                            onClick={(event) => handleStart(event)}
                            disabled={players.length < 3}
                        >
                            Jogar
                        </Button>
                    </div>
                </>
            : null}

            <div className={'create-players_exit'}>
                <ExitButton
                    id={'cy_create-players-card_exit-button'}
                    onClick={(event) => handleExit(event)}
                />
            </div> */
    )
}
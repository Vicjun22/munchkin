import './createCard.style.scss';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { Card } from '../card/card.component';
import { Button } from '../button/button.component';

import BackCard from '../../../assets/images/munchkin_door.png';

import { PlayerType } from '../../../types';

export function CreateCard({ players, setPlayers, qtdPlayers }: any) {
    const navigate = useNavigate();
    const missCard: any = [];
    const qtdMiss: number = qtdPlayers === 'um-jogador' ? 1 - players?.length : 6 - players?.length;
    
    let indexNum: number = 0;

    for (let i = 0; i < qtdMiss; i++) {
        missCard.push(
            <img
                src={BackCard}
                alt={'munchkin door'}
                className={`create-card_default-${qtdPlayers}-card`}
                key={i}
            />)
    }
    
    const cardsMapper: any = players?.map((personagem: any) => {
        indexNum++;
        return (
            <Card
                players={players}
                setPlayers={setPlayers}
                personagem={personagem}
                qtdPlayers={qtdPlayers}
                card={'created'}
                key={indexNum}
            />
        )
    })

    function handleSortearOrdem(event: any) {
        event.preventDefault();
        const arrayAtualizado = [...players];
        arrayAtualizado.forEach((player) => (player.ordem = Math.random()));
        arrayAtualizado.sort((a, b) => a.ordem - b.ordem);
        arrayAtualizado.forEach((objeto, index) => (objeto.ordem = index));
        setPlayers(arrayAtualizado);
    }

    function handleStart(event: any) {
        event.preventDefault();
        const playersComPropriedades = players.map((player: PlayerType) => ({
            ...player
            , iniciouJogo: true
            , duasClasses: false
            , chapeu: 0
            , armadura: 0
            , armaDeDuasMaos: false
            , mao1: 0
            , mao2: 0
            , calcado: 0
            , montaria: 0
        }));
        setPlayers(playersComPropriedades);
        navigate(ROUTES.GAME_PAGE.path);
    }

    return (
        <section className={'section_create-card'}>
            <div className={'create-card_cards-container'}>
                {cardsMapper}
                {missCard}
            </div>

            <div className={'create-card_btn-container'}>
                {qtdPlayers === 'um-jogador'
                    ? <div className={'create-card_void-div'}></div>
                    :
                    <Button
                        id={'cy_create-players-btn_sortear-ordem'}
                        onClick={(event) => handleSortearOrdem(event)}
                        disabled={players.length < 3}
                    >
                        Mudar Ordem
                    </Button>
                }

                <Button
                    id={'cy_create-players-btn_jogar'}
                    onClick={(event) => handleStart(event)}
                    disabled={qtdPlayers === 'um-jogador' ? players.length === 0 : players.length < 3}
                >
                    Jogar
                </Button>
            </div>
        </section>
    )
}
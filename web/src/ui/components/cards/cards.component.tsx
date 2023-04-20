import './cards.style.scss';

import FemaleAvatar from '../../../assets/images/munchkin_human-female.svg';
import MaleAvatar from '../../../assets/images/munchkin_human-male.svg';
import { Cross1Icon } from '@radix-ui/react-icons';
import { PlayerType } from '../../../types';

export function Cards({ players, setPlayers, qtdPlayers }: any) {
    const gender: any = {
        feminino:   FemaleAvatar,
        masculino:  MaleAvatar
    }

    function handleDeletePlayer(event: any, cardNum: number) {
        event.preventDefault();
        if (qtdPlayers === 'um-jogador') {
            setPlayers([])
        }
        
        if (qtdPlayers === 'varios-jogadores') {
            let novosJogadores = players.filter((player: PlayerType) => player.ordem !== cardNum);
            for(let i = 0; i < novosJogadores.length; i++) {
                novosJogadores[i].ordem = i;
            }
            setPlayers(novosJogadores);
        }
    }

    const cardsMapper: any = players?.map((personagem: any) => {
        return (
            <div className={`card_style_${qtdPlayers}`} key={personagem.ordem}>
                <button onClick={(event) => handleDeletePlayer(event, personagem.ordem)} className={'remove-card-btn'}>
                    <Cross1Icon style={{width: '80%', height: '80%'}}/>
                </button>
                <p className={'card_atributo-personagem_nivel'}>1</p>
                <p className={'card_atributo-personagem_nome'}>{personagem.nome}</p>
                <img
                    src={gender[personagem.genero]}
                    alt={'avatar do personagem'}
                    className={'card_atributo-personagem_img'}
                />
                {qtdPlayers === 'varios-jogadores'
                    && 
                    <p className={'card_atributo-personagem_ordem'}>
                        Ordem: {personagem.ordem + 1}
                    </p>
                }
            </div>
        )
    })

    return (
        <section className={'section_cards'}>
            {cardsMapper}
        </section>
    )
}
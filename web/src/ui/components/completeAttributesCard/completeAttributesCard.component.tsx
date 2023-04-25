import './completeAttributesCard.style.scss';

import { Card } from '../card/card.component';

export function CompleteAttributesCard({player, setOrdemAtual}: any) {

    return (
        <div className={'current-player_card'}>
            <div className={'current-player_card_container'}>
                <Card personagem={player} qtdPlayers={'um-jogador'} />
                
                <div className={'current-player_card_attributes'}>

                </div>
            </div>
        </div>
    )
}
import './createCard.style.scss';

import { Card } from '../card/card.component';

export function CreateCard({ players, setPlayers, qtdPlayers }: any) {


    const cardsMapper: any = players?.map((personagem: any) => {
        return (
            <Card
                players={players}
                setPlayers={setPlayers}
                personagem={personagem}
                qtdPlayers={qtdPlayers}
                card={'created'}
            />
        )
    })

    return (
        <section className={'section_cards'}>
            {cardsMapper}
        </section>
    )
}
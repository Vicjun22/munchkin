import './home.style.scss';

import { Title, HomePrimary, HomeSecondary } from '../../components';
import { useState } from 'react';

export function Home({ players, setPlayers }: any) {
    const [newGame, setNewGame] = useState<boolean>(false);

    return (
        <section className={'section_menu'}>
            <div className={'section_menu_container'}>
                <Title />

                {!newGame 
                    ?
                    <HomePrimary
                        player={players}
                        setNewGame={setNewGame} 
                    />
                    :
                    <HomeSecondary
                        setPlayers={setPlayers}
                        setNewGame={setNewGame}
                    />
                }
            </div>
        </section>
    )
};
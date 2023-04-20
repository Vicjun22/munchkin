import './home.style.scss';

import { Title, HomePrimary, HomeSecondary, ImagesHovered } from '../../components';
import { useState } from 'react';

export function Home({ players, setPlayers }: any) {
    const [newGame, setNewGame] = useState<boolean>(false);
    const [buttonHoverd, setButtonHovered] = useState<string>('');

    return (
        <section className={'section_menu'}>
            <div className={'section_menu_container'}>
                <Title />

                {!newGame 
                    ?
                    <HomePrimary
                        players={players}
                        setNewGame={setNewGame}
                        setButtonHovered={setButtonHovered}
                    />
                    :
                    <HomeSecondary
                        setPlayers={setPlayers}
                        setNewGame={setNewGame}
                        setButtonHovered={setButtonHovered}
                    />
                }
            </div>
            
            <div className={'section_menu_image'}>
                <ImagesHovered
                    buttonHoverd={buttonHoverd}
                />
            </div>
        </section>
    )
};
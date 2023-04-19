import { useNavigate } from 'react-router-dom';

import { ROUTES } from "../../../constants";
import { Button } from "../button/button.component";

export function HomePrimary({ players, setNewGame, setButtonHovered }: any) {
    const isJogoIniciado: boolean = players?.every((player: any) => player?.nivel >= 1) || false;
    const navigate = useNavigate();

    function handleContinuar(event: any) {
        event.preventDefault();
        navigate(ROUTES.GAME_PAGE.path)
    };

    function handleRegras(event: any) {
        event.preventDefault();
        navigate(ROUTES.RULES_PAGE.path);
    }

    return (
        <div className={'section_menu_content'}>
            <Button
                onClick={(event) => handleContinuar(event)}
                onMouseEnter={() => setButtonHovered('continuar')}
                onMouseLeave={() => setButtonHovered('')}
                disabled={!isJogoIniciado}
                id={'cy_home-btn_continuar'}
            >
                Continuar
            </Button>

            <Button
                onClick={() => setNewGame(true)}
                onMouseEnter={() => setButtonHovered('novo-jogo')}
                onMouseLeave={() => setButtonHovered('')}
                id={'cy_home-btn_novo-jogo'}
            >
                Novo Jogo
            </Button>
            
            <Button
                onClick={(event) => handleRegras(event)}
                onMouseEnter={() => setButtonHovered('regras')}
                onMouseLeave={() => setButtonHovered('')}
                id={'cy_home-btn_regras'}
            >
                Regras
            </Button>
        </div>
    )
}

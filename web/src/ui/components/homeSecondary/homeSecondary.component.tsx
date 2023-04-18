import { useNavigate } from "react-router-dom";

import { Button } from "../button/button.component";
import { MUNCHKIN, MUNCHKIN_QTD_PLAYERS, ROUTES } from "../../../constants";

export function HomeSecondary({ setPlayers, setNewGame }: any) {
    const navigate = useNavigate()

    function handleSelectNewGame(event: any, qtd: string) {
        event.preventDefault();
        localStorage.setItem(MUNCHKIN, '');
        localStorage.setItem(MUNCHKIN_QTD_PLAYERS, qtd);
        setPlayers([]);
        navigate(ROUTES.PLAYERS_PAGE.path);
    }

    return (
        <div className={'section_menu_content'}>
            <Button
                onClick={(event) => handleSelectNewGame(event, 'um-jogador')}
                id={'cy_home-btn_um-jogador'}
            >
                1 Ficha
            </Button>

            <Button
                onClick={(event) => handleSelectNewGame(event, 'varios-jogadores')}
                id={'cy_home-btn_varios-jogadores'}
            >
                3-6 Fichas
            </Button>
            
            <Button
                onClick={() => setNewGame(false)}
                id={'cy_home-btn_voltar'}
            >
                Voltar
            </Button>
        </div>
    )
}

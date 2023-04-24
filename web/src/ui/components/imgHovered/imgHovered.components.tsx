import './imgHovered.style.scss';

import Rules from '../../../assets/images/munchkin_rules.svg';
import Dragon from '../../../assets/images/munchkin_old-dragon.svg';
import Hero from '../../../assets/images/munchkin_new-game.svg';
import Multi from '../../../assets/images/munchkin_multiplayer.svg';
import Single from '../../../assets/images/munchkin_single-player.svg';
import Toledo from '../../../assets/images/munchkin_toledo.svg';

export function ImagesHovered({ buttonHoverd }: any) {
    const imagem: any = {
          'continuar': Dragon
        , 'novo-jogo': Hero
        , 'regras': Rules
        , 'um-jogador': Single
        , 'varios-jogadores': Multi
        , 'voltar': Toledo
    }

    return (
        <>
            {
                buttonHoverd &&
                <img
                    src={imagem[buttonHoverd]}
                    alt={buttonHoverd}
                    className={`img-hovered_content ${buttonHoverd}`}
                />
            }
        </>
    )
}
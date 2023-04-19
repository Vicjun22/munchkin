import './imgHovered.style.scss';

import Rules from '../../../assets/images/munchkin_rules.svg';
import Dragon from '../../../assets/images/munchkin_old-dragon.svg';

export function ImagesHovered({ buttonHoverd }: any) {
    const imagem: any = {
          continuar:    Dragon
        , regras:       Rules
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
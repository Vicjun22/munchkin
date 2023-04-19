import './imgHovered.style.scss';

import Rules from '../../../assets/images/munchkin_rules.svg';

export function ImagesHovered({ buttonHoverd }: any) {
    const imagem: any = {
        regras: Rules,
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
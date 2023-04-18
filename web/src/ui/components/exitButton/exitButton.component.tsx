import './exitButton.style.scss';

import { PropsButton } from '../../../types';
import { TriangleLeftIcon } from '@radix-ui/react-icons';

export function ExitButton({
    type
  , onClick
  , disabled
  , className
  , id
}: PropsButton) {

    return (
        <button
            className={className || 'exit_botao'}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled || false}
            id={id}
        >
            <TriangleLeftIcon style={{'width': '30px', 'height': '30px'}} />
            <span>Sair</span>
        </button>
    )
}
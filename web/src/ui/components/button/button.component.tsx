import './button.style.scss';

import type { PropsButton } from '../../../types';

export function Button({
          children
        , type
        , onClick
        , disabled
        , className
        , id
    }: PropsButton) {
    return (
        <button
            className={className || 'botao'}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled || false}
            id={id}
        >
            {children}
        </button>
    )
}
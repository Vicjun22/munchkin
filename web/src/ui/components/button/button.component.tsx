import './button.style.scss';

import type { PropsButton } from '../../../types';

export function Button({
          children
        , type
        , onClick
        , onMouseEnter
        , onMouseLeave
        , disabled
        , className
        , id
    }: PropsButton) {
        
    return (
        <button
            className={className || 'botao'}
            type={type || 'button'}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled || false}
            id={id}
        >
            {children}
        </button>
    )
}
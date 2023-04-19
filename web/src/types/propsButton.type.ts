export interface PropsButton {
    children?: any;
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: any;
    onMouseLeave?: any;
    disabled?: boolean;
    className?: string;
    id?: string;
}
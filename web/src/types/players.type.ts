export interface PlayerType {
    iniciouJogo?: boolean;
    
    nome?: string;
    genero?: string;
    ordem: number;
    nivel?: number;

    duasRacas?: boolean;
    raca1?: string;
    raca2?: string;

    duasClasses?: boolean;
    classe1?: string;
    classe2?: string;

    chapeu?: number;
    armadura?: number;
    armaDeDuasMaos?: boolean;
    mao1?: number;
    mao2?: number;
    calcado?: number;
    montaria?: number;

    bonusTemporario?: number;
    racaGenero?: string;
}
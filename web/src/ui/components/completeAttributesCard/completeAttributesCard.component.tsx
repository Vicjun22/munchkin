import './completeAttributesCard.style.scss';

import HumanF from '../../../assets/images/munchkin_human-female.svg'
import HumanM from '../../../assets/images/munchkin_human-male.svg'

export function CompleteAttributesCard({player, players, setPlayers, setOrdemAtual}: any) {
    const imagem: any = {
        'Humano-feminino': HumanF,
        'Humano-masculino': HumanM
    }

    function handleSubirNivel(event: any) {
        event.preventDefault();
        if (player.nivel === 10) {
            return;
        }
        const updatePlayer = {
            ...player,
            nivel: player.nivel++
        }
        return setPlayers([...players, updatePlayer])
    }

    function handleDescerNivel(event:any) {
        event.preventDefault();
        if (player.nivel === 1) {
            return;
        }
        const updatePlayer = {
            ...player,
            nivel: player.nivel--
        }
        return setPlayers([...players, updatePlayer])
    }

    function handleMudancaDeSexo(event: any) {
        event.preventDefault();
        let updateRacaGenero: string;
        let changeGender: string;
        if (player.genero === 'masculino') {
            changeGender = 'feminino'
            updateRacaGenero = player.duasRacas ? 'Mestiço-feminino' : player.raca1 + '-feminino';
        } else {
            changeGender = 'masculino'
            updateRacaGenero = player.duasRacas ? 'Mestiço-masculino' : player.raca1 + '-masculino'
        }
        const updatePlayer = {
            ...player,
            genero: changeGender,
            racaGenero: updateRacaGenero
        }
        return setPlayers([...players, updatePlayer])
    }

    return (
        <div className={'cac_current-player'}>
            <div className={'cac_current-player_container'}>
                <div className={'cac_current-player-info'}>
                    <p className={'cac_nivel'}>{player.nivel}</p>
                    <p className={'cac_nome'}>{player.nome}</p>
                    <img
                        src={imagem[player.racaGenero]}
                        alt={'Imagem do jogador'}
                        className={'cac_img'}
                    />
                    <div className={'cac_raca-classe'}>
                        <p>Raça: {player.duasRacas ? player.raca1 + '/' + player.raca2 : player.raca1}</p>
                        <p>Classe: {player.classe || 'Nenhum'}</p>
                    </div>
                </div>

                <div className={'cac_current-player-custom'}>
                    <div className={'cac_current-player-custom_nivel-genero'}>
                        <div className={'cac_current-player-custom_nivel'}>
                            <button
                                className={'cac_current-player-custom_nivel-btn'}
                                onClick={(event) => handleDescerNivel(event)}
                            >
                                -
                            </button>
                            <p>Nível</p>
                            <button
                                className={'cac_current-player-custom_nivel-btn'}
                                onClick={(event) => handleSubirNivel(event)}
                            >
                                +
                            </button>
                        </div>
                        <div className={'cac_current-player-custom_genero'}>
                            <button
                                onClick={(event) => handleMudancaDeSexo(event)}
                            >
                                Mudança de Sexo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

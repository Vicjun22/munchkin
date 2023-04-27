import './completeAttributesCard.style.scss';

import HumanF from '../../../assets/images/munchkin_human-female.svg'
import HumanM from '../../../assets/images/munchkin_human-male.svg'

export function CompleteAttributesCard({player, setOrdemAtual}: any) {
    const imagem: any = {
        'Humano-feminino': HumanF,
        'Humano-masculino': HumanM
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

                </div>
            </div>
        </div>
    )
}
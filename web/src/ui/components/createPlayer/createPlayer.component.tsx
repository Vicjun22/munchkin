import './createPlayer.style.scss';

import { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { Button } from "../button/button.component"

import FemaleAvatar from '../../../assets/images/munchkin_human-female.svg';
import MaleAvatar from '../../../assets/images/munchkin_human-male.svg';

export function CreatePlayer({ players, setPlayers, qtdPlayers, setOpenModal }: any) {
    const [nomeJogador, setNomeJogador] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const isDadosSuficientes: boolean = nomeJogador !== '' && genero !== '';

    function handleSetGender(event: any, gender: string) {
        event.preventDefault();
        gender !== genero && setGenero(gender);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        if (players.length < 6) {
            const newPlayer = {
                  nome: nomeJogador
                , genero: genero
                , ordem: players.length
                , raca: 'Humano'
            };
            setPlayers([...players, newPlayer]);
            setNomeJogador('');
            setGenero('');
        }
    }

    return (
        <form className={'create-card_form-content'} onSubmit={(event) => handleSubmit(event)}>
            <label className={'create-card_label'}>
                Digite o nome de seu personagem
                <input
                    onChange={(event) => setNomeJogador(event.target.value)}
                    id={'cy_create-card-input_nome'}
                    className={'create-card_input'}
                    placeholder={'Fulano de Tal'}
                    autoComplete={'off'}
                    value={nomeJogador}
                    required={true}
                    type={'text'}
                />
            </label>

            <label  className={'create-card_label'}>
                    Selecione o gênero de seu personagem
                <div className={'create-card_gender_container'}>
                    <img
                        className={(genero === 'feminino' && 'selected') || 'create-card_gender-img'}
                        onClick={(event) => handleSetGender(event, 'feminino')}
                        id={'cy_create-card-img_f'}
                        src={FemaleAvatar}
                        alt={'female avatar'}
                    />

                    <img
                        className={(genero === 'masculino' && 'selected') || 'create-card_gender-img'}
                        onClick={(event) => handleSetGender(event, 'masculino')}
                        id={'cy_create-card-img_m'}
                        src={MaleAvatar}
                        alt={'male avatar'}
                    />
                </div>
            </label>

            <div className={'create-card_btn-container'}>
                <Button
                    onClick={() => setOpenModal(true)}
                    id={'cy_create-players-btn_sair'}
                >
                    Sair
                </Button>

                <Button
                    type={'submit'}
                    disabled={(qtdPlayers === 'um-jogador' && players.length >= 1) || players.length >= 6 || !isDadosSuficientes}
                    id={'cy_create-players-btn_adicionar'}
                >
                    {qtdPlayers === 'um-jogador' ? 'Criar Card' : 'Adicionar'}
                </Button>
            </div>
        </form>
    )
}
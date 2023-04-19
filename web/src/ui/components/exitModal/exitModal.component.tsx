import './exitModal.style.scss';

import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Cross1Icon } from '@radix-ui/react-icons';

import { Button } from '../button/button.component';
import { ROUTES } from '../../../constants';

export function ExitModal({ setOpenModal }: any) {
    const navigate: NavigateFunction = useNavigate();

    function handleSair(event: any) {
        event.preventDefault();
        navigate(ROUTES.HOME_PAGE.path);
    }

    return (
        <div className={'modal_container'}>
            <div className={'modal_content'}>
                <h2>Tem certeza de que deseja sair?</h2>

                <div>
                    <Button onClick={() => setOpenModal(false)}>
                        Não
                    </Button>

                    <Button onClick={(event) => handleSair(event)}>
                        Sim
                    </Button>
                </div>

                <button
                    className={'exit-modal_btn-cross'}
                    onClick={() => setOpenModal(false)}
                >
                    <Cross1Icon />
                </button>
            </div>
        </div>
    )
}

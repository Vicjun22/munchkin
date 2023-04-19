import { Button } from '../button/button.component';
import './exitModal.style.scss';

export function ExitModal() {

    return (
        <div className={'modal_container'}>
            <p>Tem certeza de que deseja sair?</p>

            <div>
                <Button>
                    Não
                </Button>

                <Button>
                    Sim
                </Button>
            </div>
        </div>
    )
}

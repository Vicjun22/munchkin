import './rules.style.scss';

import { useNavigate } from 'react-router-dom';

import { rules } from '../../../utils/rules';
import { Button } from '../../components';
import { ROUTES } from '../../../constants';

export function Rules() {
    const navigate = useNavigate();
    const titulos = Object.values(rules).map((regras: any, index: number) => {
        return (
            <li className={'regras_titulos'} key={index}>
                {regras.title}
            </li>
        )
    })


    return (
        <section className={'section_rules'}>
            <div className={'section_rules_container'}>
                <ul className={'regras_titulos_container'}>
                    {titulos}
                </ul>
                <Button onClick={() => navigate(ROUTES.HOME_PAGE.path)}>Voltar</Button>
            </div>

            <div className={'section_rules_content'}>

            </div>
        </section>
    )
}
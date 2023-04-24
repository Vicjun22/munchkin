import './rules.style.scss';

import { useNavigate } from 'react-router-dom';

import { rules } from '../../../utils/rules';
import { Button } from '../../components';
import { ROUTES } from '../../../constants';
import { useState } from 'react';

export function Rules() {
    const navigate = useNavigate();
    const [ruleContent, setRuleContent] = useState<string>('REGRAS');

    const titulos = rules.map((regras: any, index: number) => {
        return (
            <li onClick={() => setRuleContent(regras.title)} className={'regras_titulos'} key={index}>
                {regras.title}
            </li>
        )
    })

    const regraMapper: any = rules.map((regras: any) => {
        if (regras.title !== ruleContent) {
            return;
        }

        const conteudo: string[] = regras.content.map((content: string) => <p>{content}</p>);
        
        return (
            <>
                <h1>{regras.title}</h1>
                <p>{conteudo}</p>
            </>
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
                {regraMapper}
            </div>
        </section>
    )
}
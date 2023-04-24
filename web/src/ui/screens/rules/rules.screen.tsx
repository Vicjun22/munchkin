import './rules.style.scss';

import { useNavigate } from 'react-router-dom';

import { rules } from '../../../utils/rules';
import { Button } from '../../components';
import { ROUTES } from '../../../constants';
import { useState } from 'react';

export function Rules() {
    const navigate = useNavigate();
    const [ruleContent, setRuleContent] = useState<string>('REGRAS');

    let indexNum: number = 0;

    const titulos = rules.map((regras: any) => {
        return (
            <li onClick={() => setRuleContent(regras.title)} className={'regras_titulos'} key={indexNum}>
                {regras.title}
            </li>
        )
    })

    const regraMapper: any = rules.map((regras: any) => {
        if (regras.title !== ruleContent) {
            return;
        }
        
        const conteudo: string[] = regras.content.map((content: string) => {
            indexNum++;
            return (
                <p key={indexNum}>{content}</p>
            )
        });

        const subConteudo: any = regras.more?.map((subConteudo: any) => {
            indexNum++;
            const conteudo: any = subConteudo.content.map((content: string) => {
                indexNum++;
                return (
                    <p key={indexNum}>{content}</p>
                )
            })

            return (
                <>
                    <h3 key={indexNum}>{subConteudo.subtitle}</h3>
                    {conteudo}
                </>
            )
        })
        
        return (
            <div className={'rules_content-div'} key={indexNum}>
                <h1>{regras.title}</h1>
                {conteudo}
                {subConteudo}
            </div>
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
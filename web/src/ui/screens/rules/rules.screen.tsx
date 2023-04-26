import './rules.style.scss';

import { useNavigate } from 'react-router-dom';

import { rules } from '../../../utils/rules';
import { Button } from '../../components';
import { ROUTES } from '../../../constants';
import React, { useState } from 'react';

export function Rules() {
    const navigate = useNavigate();
    const [ruleContent, setRuleContent] = useState<string>('REGRAS');

    const titulos = rules.map((regras: any) => {
        return (
            <li
                onClick={() => setRuleContent(regras.title)}
                className={ruleContent === regras.title ? 'regras_titulos-selecionado' : 'regras_titulos'}
                key={regras.title + '_0'}
            >
                {regras.title}
            </li>
        )
    })

    const regraMapper: any = rules.map((regras: any) => {
        if (regras.title !== ruleContent) {
            return;
        }

        const conteudo: string[] = regras.content.map((content: string, index: number) => {
            ;
            return (
                <React.Fragment key={content + `_${index}`}>
                    <p>{content}</p>
                    <br></br>
                </React.Fragment>
            )
        });

        const subConteudo: any = regras.more?.map((subContent: any) => {
            const moreContentList = subContent.content.map((moreContent: string, index: number) => {
                return (
                    <React.Fragment key={moreContent + `_${index}`}>
                        <p>{moreContent}</p>
                        <br></br>
                    </React.Fragment>
                )
            })

            return (
                <React.Fragment key={subContent.subtitle}>
                    <h3>{subContent.subtitle}</h3>
                    <br></br>
                    {moreContentList}
                </React.Fragment>
            )
        })

        return (
            <div className={'rules_content-div'} key={regras.title + '_1'}>
                <h1 className={'rules_content-title'}>{regras.title}</h1>
                <br></br>
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
                <Button
                    id={'cy_rules-btn_voltar'}
                    onClick={() => navigate(ROUTES.HOME_PAGE.path)}
                >
                    Voltar
                </Button>
            </div>

            <div className={'section_rules_content'}>
                {regraMapper}
            </div>
        </section>
    )
}
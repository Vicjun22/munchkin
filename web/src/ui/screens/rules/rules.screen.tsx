import { rules } from '../../../utils/rules';
import './rules.style.scss';

export function Rules() {
    const titulos = Object.values(rules).map((regras: any) => {
        return (
            <li>{regras.title}</li>
        )
    })


    return (
        <section className={'section_rules'}>
            <div className={'section_rules_container'}>
                {titulos}
            </div>

            <div className={'section_rules_content'}>

            </div>
        </section>
    )
}
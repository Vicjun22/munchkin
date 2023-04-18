import { Title } from '../../components';
import './rules.style.scss';

export function Rules() {

    return (
        <section className={'rules_section'}>
            <div className={'rules_container'}>
                <div className={'rules_title'}>
                    <Title />
                    <p>Jogo original criado por Steve Jackson</p>
                    <p>Ilsutrações originais: John Kovalic</p>
                    <p>Regras Oficiais - Versão 1.04 (Adaptado para a aplicação Helper)</p>
                </div>

                <div className={'rules_content'}>
                    <p><span style={{ fontFamily: 'Windlass' }}>MUNCHKIN</span> é uma paródia insípida que produz em essência a mesma experiência de se embrenhar nas masmorras... mas sem toda aquela confusão das aventuras de RPG!</p>

                    <h3 style={{ fontFamily: 'Windlass', marginTop: '10px' }}>PREPARAÇÃO</h3>
                    <p>Munchkin pode ser jogado por 3 a 6 participantes. Para jogar você precisa das cartas e desta aplicação web que servirá como marcador para cada jogador.</p>
                    <p>Divida as cartas em duas pilhas, uma com as cartas de Masmorra (que tem a porta no verso) e outra com as cartas de Tesouro (que têm um monte de tesouros no verso). Embaralhe as cartas de cada uma das pilhas e distribua 2 cartas de cada pilha para cada um dos jogadores.</p>

                    <h3 style={{ fontFamily: 'Windlass', marginTop: '10px' }}>DISTRIBUIÇÃO DAS CARTAS</h3>
                    <p>Crie duas pilhas de descarte separadas, uma para cada maço. Quando as cartas de um maço acabarem, embaralhe novamente as cartas da pilha de descarte correspondente. Se um dos maços acabar e não houver cartas na pilha de descarte, ninguém poderá comprar cartas daquele tipo!</p>
                    <p><strong>Sua Mão: </strong>As cartas que se encontram em sua mão não estão em jogo. Elas não o ajudam, mas ninguém pode tirá-las de você, a não ser que estejam usando cartas que afetam especificamente a "sua mão", em vez de afetar os itens que você carrega. No final do seu turno, você não pode ter mais do que 5 cartas na mão (6 no caso dos anões).</p>
                    <p><strong>Itens Carregados: </strong>As cartas de tesouro se tornam "itens carregados" quando são colocadas na frente de um jogador. Veja o parágrafo Itens, mais adiante.</p>
                    <p><strong>Quando as Cartas Podem ser Usadas: </strong>Cada tipo de carta pode ser usada num determinado momento (veja mais adiante).</p>
                    <p>As cartas que estiverem em jogo não podem ser devolvidas para a mão do jogador - elas têm que ser descartadas ou trocadas se o jogador quiser se livrar delas.</p>

                    <h3 style={{ fontFamily: 'Windlass', marginTop: '10px' }}>CRIAÇÃO DE PERSONAGENS</h3>
                    <p>Todos os jogadores iniciam a partida como humanos de Nível 1 e sem classe. (He, he, he.)</p>
                    <p>Dê uma olhada nas suas quatro primeiras cartas. Se tiver alguma carta de <strong>Raça</strong> ou <strong>Classe</strong>, você poderá (se quiser) colocar uma de cada tipo na sua frente. Se tiver alguma carta de <strong>Item</strong>, você também poderá colocá-la na sua frente. Se tiver alguma dúvida sobre se deve jogar ou não uma carta, leia o resto do manual ou simplesmente desencane e vá fundo!</p>

                    <h3 style={{ fontFamily: 'Windlass', marginTop: '10px' }}>INÍCIO E TÉRMINO DO JOGO</h3>
                    <p>Para decidir quem começa, a aplicação web possui uma opção de criar e acompanhar de 3 à 6 fichas, durante a criação das fichas é possível definir a ordem ou então, clicar em trocar ordem para uma opção de ordem aleatória, há também a opção de clicar no dado na opção de acompanhamento de 1 ficha, depois discuta com os outros jogadores o resultado obtido e o significado dessa frase e se o fato de parecer que uma palavra está faltando qualquer efeito.</p>
                    <p>O jogo é disputado em turnos, cada um dos quais com diversas fases (v. a seguir). Quando o primeiro jogador termina seu turno, começa o turno do próximo jogador em sequência e, assim por diante.</p>
                    <p>O primeiro jogador que chegar ao 10º nível será o vencedor... mas é obrigatório chegar ao 10º nível matando um monstro ou por Intervenção Divina. Se dois jogadores matarem um monstro em conjunto e chegarem ao 10º nível simultaneamente, ambos serão os vencedores.</p>

                    <h3 style={{ fontFamily: 'Windlass', marginTop: '10px' }}>AS FASES DO TURNO</h3>
                    <p><strong>(1) Abra Uma Porta: </strong>Compre uma carta do maço de Masmorra virada para cima. Se for um monstro, você terá que enfrentá-lo. Ver o parágrafo <strong>Combate.</strong> Resolva o combate completamente antes de passar para a próxima fase. Se conseguir matar o monstro, você ganha um nível (ou dois níveis, se o monstro for grande - isso estará especificado na carta).</p>
                    <p>Se a carta for uma maldição - ver parágrafo <strong>Maldições</strong> - seu efeito é imediatamente aplicado no personagem (se possível) e a carta é descartada.</p>
                    <p>Se comprar qualquer outra carta, você poderá optar por mantê-la em sua mão ou usá-la na hora.</p>
                    <p><strong>(2) Vá Atrás de Confusão: </strong>Se NÃO tiver encontrado um monstro quando abriu a porta, você tem a opção de baixar um monstro <strong>da sua mão </strong>(se tiver um) e lutar contra ele, conforme descrito anteriormente. Não baixe um monstro que seu personagem não é capaz de derrotar, a menos que você tenha certeza de que vai conseguir ajuda!</p>
                    <p><strong>(3) Saqueie a Sala: </strong>Se tiver matado um monstro, pegue o número de Tesouros que está impresso na carta do monstro. Compre essas cartas fechadas, se tiver matado o monstro sozinho. Caso contrário, compre-as abertas.</p>
                    <p>Se encontrou um montro e decidiu fugir, você não poderá saquear a sala.</p>
                    <p>Se não encontrou monstro algum, ou se encontrou um monstro amigável, você poderá vasculhar a sala... comprar uma segunda carta <strong>fechada</strong> do maço de <strong>Masmorra </strong>e colocá-la em sua mão.</p>
                    <p><strong>(4) Caridade: </strong>Se tiver cartas demais em sua mão (6 no caso de anões e 5 para todo o resto), dê as cartas excedentes para o jogador vivo que tiver o menor nível. Se houver mais de um jogador com o menor nível, divida entre eles o mais igualmente possível, mas é você quem decide quem ficará com a metade maior. Se VOCÊ for o jogador, ou um dos jogadores, com o menor nível, apenas descarte as cartas excedentes.</p>
                    <p>Nesse ponto começa o turno do próximo jogador.</p>

                    <h3 style={{ fontFamily: 'Windlass', marginTop: '10px' }}>COMBATE</h3>
                    <p>Para lugar contra um monstro é preciso ver o Nível dele no topo da carta. Se a soma de seu Nível mais os Bônus devidos aos itens que você está carregando for maior do que o Nível do monstro, você o matou. Algumas cartas de monstro têm poderes especiais que afetam o combate - como, por exemplo, um bônus contra uma determinada raça ou classe. Não se esqueça de verificar esses efeitos antes de resolver o combate.</p>
                    <p>Você pode também usar cartas de uso único, como as poções, <i>que estiverem em sua mão </i>durante o combate. Uma carta é de uso único se estiver escrito "Uso Único" nela, ou aumento de Nível.</p>
                    <p>Não é permitido roubar nem trocar itens enquanto o combate está em andamento. Se outros monstros (um Monstro Errante ou um Parceiro) se juntarem ao combate, você terá de derrotar a soma dos Níveis deles. Se tiver as cartas certas, você pode eliminar um monstro do combate e lugar normalmente contra o outro, mas não pode lutar contra um e fugir do(s) outro(s). Se você eliminar um deles usando uma carta e fugir do(s) outro(s), não receberá tesouro algum.</p>
                    <p>Se matar um monstro, você ganha 1 Nível automaticamente (2 Níveis no caso de alguns monstros muito perigosos). Se tiver lutando contra mais de uma carta de mosntro - veja o parágrafo <strong>Interferindo </strong>- você ganha um nível para cada monstro que tiver matado! Mas se derrotar um monstro sem matá-lo, você NÃO ganhará Nível algum.</p>
                    <p>Descarte a(s) carta(s) de monstro e compre seu tesouro (ver a seguir). Mas lembre-se de que alguém pode jogar uma carta hostil contra você ou usar um poder especial e mudar o resultado de um combate considerado "ganho". Quando matar um monstro, você tem que esperar um tempo razoável (definido como sendo 2,6 segundos) para ver se algum outro jogador fala alguma coisa. Só depois desse tempo é que você terá realmente matado o monstro e poderá ganhar um nível e pegar o tesouro, embora os outros jogadores ainda possam discutir e reclamar.</p>
                    <p>Se não conseguir derotar um monstro, você tem duas opções: pedir ajuda ou fugir.</p>
                </div>
            </div>
        </section>
    )
}
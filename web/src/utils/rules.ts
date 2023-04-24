export const rules: any = {
    0: {
        title: 'REGRAS',
        content: {
            0: 'Jogo criado por Steve Jackson e com ilustrações originais criadas por John Kovalic, "Munchkin é uma paródia insípida que produz em essência a mesma experiência de se embrenhar nas masmorras... mas sem toda aquela confusão de RPG!" - Trecho retirado do próprio manual do jogo.',
            1: 'As regras do jogo irão seguir as Regras Oficiais - Versão 1.04 porém, com adaptações para a aplicação Munchkin | Helper.',
            2: 'MUNCHKIN é uma paródia insípida que produz em essência a mesma experiência de se embrenhar nas masmorras... mas sem toda aquela confusão das aventuras de RPG!'
        }
    },
    1: {
        title: 'PREPARAÇÃO',
        content: {
            0: 'Munchkin pode ser jogado por 3 a 6 participantes. Para jogar você precisa das cartas e desta aplicação web que servirá como marcador para cada jogador.',
            1: 'Divida as cartas em duas pilhas, uma com as cartas de Masmorra (que tem a porta no verso) e outra com as cartas de Tesouro (que têm um monte de tesouros no verso). Embaralhe as cartas de cada uma das pilhas e distribua 2 cartas de cada pilha para cada um dos jogadores.'
        }
    },
    2: {
        title: 'DISTRIBUIÇÃO DAS CARTAS',
        content: {
            0: 'Crie duas pilhas de descarte separadas, uma para cada maço. Quando as cartas de um maço acabarem, embaralhe novamente as cartas da pilha de descarte correspondente. Se um dos maços acabar e não houver cartas na pilha de descarte, ninguém poderá comprar cartas daquele tipo!',
            1: 'Sua Mão: As cartas que se encontram em sua mão não estão em jogo. Elas não o ajudam, mas ninguém pode tirá-las de você, a não ser que estejam usando cartas que afetam especificamente a "sua mão", em vez de afetar os itens que você carrega. No final do seu turno, você não pode ter mais do que 5 cartas na mão (6 no caso dos anões).',
            2: 'Itens Carregados: As cartas de tesouro se tornam "itens carregados" quando são colocadas na frente de um jogador. Veja o parágrafo Itens, mais adiante.',
            3: 'Quando as Cartas Podem ser Usadas: Cada tipo de carta pode ser usada num determinado momento (veja mais adiante). As cartas que estiverem em jogo não podem ser devolvidas para a mão do jogador - elas têm que ser descartadas ou trocadas se o jogador quiser se livrar delas.'
        }
    },
    3: {
        title: 'CRIAÇÃO DE PERSONAGENS',
        content: {
            0: 'Todos os jogadores iniciam a partida como humanos de Nível 1 e sem classe. (He, he, he.)',
            1: 'Dê uma olhada nas suas quatro primeiras cartas. Se tiver alguma carta de Raça ou Classe, você poderá (se quiser) colocar uma de cada tipo na sua frente. Se tiver alguma carta de Item, você também poderá colocá-la na sua frente. Se tiver alguma dúvida sobre se deve jogar ou não uma carta, leia o resto do manual ou simplesmente desencane e vá fundo!'
        }
    },
    4: {
        title: 'INÍCIO E TÉRMINO DO JOGO',
        content: {
            0: 'Para decidir quem começa, a aplicação web possui uma opção de criar e acompanhar de 3 à 6 fichas, durante a criação das fichas é possível definir a ordem ou então, clicar em trocar ordem para uma opção de ordem aleatória, há também a opção de clicar no dado na opção de acompanhamento de 1 ficha, depois discuta com os outros jogadores o resultado obtido e o significado dessa frase e se o fato de parecer que uma palavra está faltando qualquer efeito.',
            1: 'O jogo é disputado em turnos, cada um dos quais com diversas fases (ver a seguir). Quando o primeiro jogador termina seu turno, começa o turno do próximo jogador em sequência e, assim por diante.',
            2: 'O primeiro jogador que chegar ao 10º nível será o vencedor... mas é obrigatório chegar ao 10º nível matando um monstro ou por Intervenção Divina. Se dois jogadores matarem um monstro em conjunto e chegarem ao 10º nível simultaneamente, ambos serão os vencedores.'
        }
    },
    5: {
        title: 'AS FASES DO TURNO',
        content: {
            0: '(1) Abra Uma Porta: Compre uma carta do maço de Masmorra virada para cima. Se for um monstro, você terá que enfrentá-lo. Ver o parágrafo Combate. Resolva o combate completamente antes de passar para a próxima fase. Se conseguir matar o monstro, você ganha um nível (ou dois níveis, se o monstro for grande - isso estará especificado na carta).',
            1: 'Se a carta for uma maldição - ver parágrafo Maldições - seu efeito é imediatamente aplicado no personagem (se possível) e a carta é descartada.',
            2: 'Se comprar qualquer outra carta, você poderá optar por mantê-la em sua mão ou usá-la na hora.',
            3: '(2) Vá Atrás de Confusão: Se NÃO tiver encontrado um monstro quando abriu a porta, você tem a opção de baixar um monstro da sua mão (se tiver um) e lutar contra ele, conforme descrito anteriormente. Não baixe um monstro que seu personagem não é capaz de derrotar, a menos que você tenha certeza de que vai conseguir ajuda!',
            4: '(3) Saqueie a Sala: Se tiver matado um monstro, pegue o número de Tesouros que está impresso na carta do monstro. Compre essas cartas fechadas, se tiver matado o monstro sozinho. Caso contrário, compre-as abertas.',
            5: 'Se encontrou um montro e decidiu fugir, você não poderá saquear a sala.',
            6: 'Se não encontrou monstro algum, ou se encontrou um monstro amigável, você poderá vasculhar a sala... comprar uma segunda carta fechada do maço de Masmorra e colocá-la em sua mão.',
            7: '(4) Caridade: Se tiver cartas demais em sua mão (6 no caso de anões e 5 para todo o resto), dê as cartas excedentes para o jogador vivo que tiver o menor nível. Se houver mais de um jogador com o menor nível, divida entre eles o mais igualmente possível, mas é você quem decide quem ficará com a metade maior. Se VOCÊ for o jogador, ou um dos jogadores, com o menor nível, apenas descarte as cartas excedentes.',
            8: 'Nesse ponto começa o turno do próximo jogador.'
        }
    },
    6: {
        title: 'COMBATE',
        content: {
            0: 'Para lugar contra um monstro é preciso ver o Nível dele no topo da carta. Se a soma de seu Nível mais os Bônus devidos aos itens que você está carregando for maior do que o Nível do monstro, você o matou. Algumas cartas de monstro têm poderes especiais que afetam o combate - como, por exemplo, um bônus contra uma determinada raça ou classe. Não se esqueça de verificar esses efeitos antes de resolver o combate.',
            1: 'Você pode também usar cartas de uso único, como as poções, que estiverem em sua mão durante o combate. Uma carta é de uso único se estiver escrito "Uso Único" nela, ou aumento de Nível.',
            2: 'Não é permitido roubar nem trocar itens enquanto o combate está em andamento. Se outros monstros (um Monstro Errante ou um Parceiro) se juntarem ao combate, você terá de derrotar a soma dos Níveis deles. Se tiver as cartas certas, você pode eliminar um monstro do combate e lugar normalmente contra o outro, mas não pode lutar contra um e fugir do(s) outro(s). Se você eliminar um deles usando uma carta e fugir do(s) outro(s), não receberá tesouro algum.',
            3: 'Se matar um monstro, você ganha 1 Nível automaticamente (2 Níveis no caso de alguns monstros muito perigosos). Se tiver lutando contra mais de uma carta de mosntro - veja o parágrafo Interferindo - você ganha um nível para cada monstro que tiver matado! Mas se derrotar um monstro sem matá-lo, você NÃO ganhará Nível algum.',
            4: 'Descarte a(s) carta(s) de monstro e compre seu tesouro (ver a seguir). Mas lembre-se de que alguém pode jogar uma carta hostil contra você ou usar um poder especial e mudar o resultado de um combate considerado "ganho". Quando matar um monstro, você tem que esperar um tempo razoável (definido como sendo 2,6 segundos) para ver se algum outro jogador fala alguma coisa. Só depois desse tempo é que você terá realmente matado o monstro e poderá ganhar um nível e pegar o tesouro, embora os outros jogadores ainda possam discutir e reclamar.',
            5: 'Se não conseguir derotar um monstro, você tem duas opções: pedir ajuda ou fugir.'
        },
        more: {
            0: {
                subtitle: 'O PEDIDO DE AJUDA',
                content: {
                    0: 'Você pode pedir para outro jogador ajudá-lo. Se ele se recusar, você pode pedir para um terceiro jogador e, assim por diante, até todos eles terem se recusado ou alguém se decidir a ajudá-lo. Você só pode receber ajuda de um único jogador em cada combate.',
                    1: 'Você também pode subornar alguém para que ele o ajude. Na verdade, é muito provável que você tenha que subornar alguém, a menos que haja algum Elfo no grupo. Você pode oferecer qualquer item que você estiver carregando ou qualquer quantidade de cartas de Tesouro que o monstro tiver. Se oferecer parte do tesouro do monstro, você tem que definir quem escolhe primeiro ou o quê.',
                    2: 'Quando receber ajuda de alguém, você somará o Nível e os Bônus deste jogador aos seus.',
                    3: 'As vulnerabilidades ou habilidades especiais do monstro também são aplicadas em quem estiver ajudando, e vice-versa. Exemplo: se um Guerreiro o ajudar, você derrotará o monstro se o total combinado dos dois for igual ao do monstro, e ele pode se Enfurecer e descartar cartas para aumentar a força de combate dele. Se você estiver enfrentando o Paga-pau de Vampiro e um Clérigo ajudá-lo, ele poderá afugentar o moristro, automaticamente. Mas se você estiver enfrentando um Lodo Babão e um Elfo for ajudá-lo, o nível do monstro é aumentado em 4 pontos (a menos que você também seja um Elfo e o nível do monstro já tenha sido aumentado).',
                    4: 'Se alguém ajudá-lo com sucesso, o monstro é morto. Descarte-o, pegue o tesouro (ver a seguir) e siga as instruções especiais que constam da carta do monstro (se houver). Você ganha um nível para cada monstro que tiver sido abatido. Quem o tiver ajudado não ganha nível algum... a menos que seja um Elfo, caso em que ele também ganha um nível para cada monstro que tiver sido morto.',
                    5: 'Se ninguém quiser ajudar-lo... ou se alguém tentar ajudar e os outros integrantes do grupo decidirem agredi-lo ou ajudar o monstro para que mesmo assim vocês não consigam derrotá-lo... você terá de fugir.'
                }
            },
            1: {
                subtitle: 'A FUGA',
                content: {
                    0: 'Se fugir, você não ganha níveis nem tesouros. Você nem mesmo tem direito de saquear a sala (ou seja, comprar uma carta de Masmorra fechada). E você nem sempre conseguirá escapar...',
                    1: 'Jogue o dado. Você só conseguirá escapar se tirar 5 ou 6. Os Elfos ganham um bônus para fugir, enquanto os halflings ficam sujeitos a uma penalidade. Alguns itens mágicos podem facilitar ou dificultar a fuga. Exitem também alguns monstros muito rápidos que podem impor uma penalidade sobre a sua jogada.',
                    2: 'Se você conseguir escapar, descarte o monstro. Você não recebe tesouro algum. Normalmente nada de ruim acontece... mas leia a carta. Alguns monstros são capazes de ferí-lo mesmo que você consiga fugir deles!',
                    3: 'Se o monstro conseguir alcançá-lo em sua fuga, ele faz uma Coisa Ruim acontecer com você, conforme estiver descrito na carta dele. Ele pode fazer você perder um item, um ou mais níveis ou até levá-lo à Morte!',
                    4: 'Se dois jogadores estiverem ajudando um ao outro e mesmo assim não conseguirem matar o(s) monstro(s), os dois terão de fugir. Eles fazem testes separados. O(s) monstro(s) PODE(M) alcançar os dois.',
                    5: 'Se estiver fugindo de múltipols monstros, você joga uma vez para cada um deles, na ordem que preferir, e é afetado pela Coisa Ruim de cada um que conseguir alcançá-lo.'
                }
            },
            2: {
                subtitle: 'A MORTE',
                content: {
                    0: 'Se morrer, voê perde tudo que tem. Você continua com sua(s) classe(s), raça(s) e nível - o seu novo personagem será igualzinho ao antigo.',
                    1: 'Pilhagem do Corpo: Coloque as cartas que estavam em sua mão ao lado das cartas que estavam em jogo. Começando por aquele que tiver o maior nível, cada um dos outros jogadores escolherá uma carta... se houver empates no nível, jogue um dado. Se o seu cadáver ficar sem cartas, será uma pena. Depois que todo mundo tiver pego uma carta, as outras serão descartadas.',
                    2: 'O seu novo personagem aparece imediatamente e pode ajudar os outros em compate já no próximo turno... mas voê vai estar sem cartas. No seu próximo turno, comece comprando duas cartas fechadas de cada maço, e baixe as cartas de Raça, Classe ou Item que quiser, como fez no início do jogo.'
                }
            },
            3: {
                subtitle: 'O TESOURO',
                content: {
                    0: 'Quando você derrotar um monstro, seja matando-o ou usando uma carta para eliminá-lo, você fica com o Tesouro dele. Cada monstro etm um número de Tesouro na parte inferior da carta. Compre aquela quantidade de cartas de tesouro. Compre-as fechadas se tiver matado o monstro sem ajuda, caso contrário, compre-as abertas para que o grupo todo possa ver o que você conseguiu.',
                    1: 'As cartas de Tesouro podem ser usadas assim que você as obtiver. As cartas de Item podem ser colocadas na sua frente. E as cartas do tipo "Suba um Nível", podem ser usadas instantaneamente.'
                }
            }
        }
    },
    7: {
        title: 'CARACTERÍSTICAS DOS PERSONAGENS',
        content: {
            0: 'Cada personagem é basicamente um conjunto de armas, armadura e itens mágicos que tem três características: Nível, Raça e Classe. Você pode, por exemplo, descrever seu personagem como sendo "um elfo mago nível 8 equipado com as Botas de dar um Pé na Bunda, um Bastão de Napalm e as Joelheiras da Sedução".',
            1: 'No início, o sexo do seu personagem é o mesmo que o seu.',
            2: 'Nível: Essa é a uma medida de quão em forma e fisicamente desenvolvido você é. (Os monstros também têm nível.) Acompanhe a evolução do seu nível colocando marcadores em sua frente. O nível varia entre 1 e 10. Você vai ganhar e perder níveis constantemente durante a partida.',
            3: 'Você ganha um nível quando matar um monstro ou quando uma carta disser que isso acontece. Você também pode vender itens para comprar níveis (veja o parágrafo Itens).',
            4: 'Você perde um nível quando uma carta disser que isso acontece. Você nunca pode ter um nível menor do que 1. No entando, durante um combate, o seu nível efetivo pode ser negativo, se você for amaldiçoado ou apunhalado pelas costas.',
            5: 'Raça: Os personagens podem ser humanos, elfos, anões ou halflings. Se você não tiver qualquer carta de Raça na sua frente, você é um humano.',
            6: 'Os humanos não têm habilidades especiais. Todas as outras raças têm habilidades ou penalidades especiais (veja as cartas). Você ganha as habilidades de uma raça no momento em que baixar a carta da raça na sua frente, e as perde assim que descartar aquela carta. Você pode descartar uma carta de raça a qualquer momento, até mesmo durante um combate: "Cansei de ser um elfo!". Quando descarta uma carta de raça, você volta a ser humano.',
            7: 'Você não pode pertencer a mais de uma raça ao mesmo tempo, a menos que use a carta Mestiço.',
            8: 'Classe: Os personagens podem ser guerreiros, magos, ladrões ou clérigos. Se você não tiver uma carta de Classe na sua frente, você não pertence a nenhuma classe. OK, eu sei que nós já falamos sobre isso.',
            9: 'Cada classe tem suas próprias habilidades que estão indicadas nas cartas. Você ganha as habilidades de uma classe no momento em que baixa a carta da classe na sua frente, e perde essas habilidades assim que descartar aquela carta. A maioria das habilidades de classe é alimentada pelo descate das cartas. Você pode descartar qualquer carta, esteja ela em jogo ou na sua mão, para ativar uma habilidade especial. Lembre-se de que se você NÃO tiver cartas na mão, não poderá "descartar toda a sua mão".',
            10: 'Veja as cartas de Classe para saber quando suas habilidades podem ser utilizadas. Lembre-se de que um Ladrão nõa pode roubar durante um combate, e que o combate tem início assim que um monstro é revelado.',
            11: 'Você pode descartar uma carta de classe a qualquer momento, até mesmo durante um combate: "Cansei de ser um mago!". Quando descartar uma carta de classe, você fica sem classe até baixar uma outra carta de classe.',
            12: 'Você não pode pertencer a mais de uma classe ao mesmo tempo, a menos que use a carta Super Munchkin.'
        }
    },
    8: {
        title: 'ITENS',
        content: {
            0: 'Cada carta de Item tem nome, poder, tambanho e um valor em peças de ouro.',
            1: 'As cartas de item que estiverem na sua mão não terão efeito algum até você baixá-las na mesa, a partir desse momento você os estará "carregando". Você pode carregar quantos itens Pequenos quiser, mas apenas um item Grande. (Todos os itens que não forem designados como Grandes serão considerados Pequenos.)',
            2: 'Os Anões são exceção. Eles podem carregar quantos itens Grandes quiserem. Se deixar de ser um Anão e tiver mais do que um item Grande, você terá de se livrar imediatamente de todos os itens grandes menos um. Se estiver em seu turno, você poderá vendê-los. Caso contrário, você terá que dá-los para o(s) jogador(es) de menor nível que puder(em) carregá-los!',
            3: 'Qualquer jogador pode carregar qualquer item, mas existem alguns itens que têm restrições de uso: a Maça Afiada, por exemplo, só pode ser empunhada por um clérigo. O seu bônus só conta para quem for, naquele momento, um clérigo.',
            4: 'Da mesma forma, você também só pode usar uma carapuça, uma armadura, um par de calçados e dois itens de "uma mão" (ou um item de "duas mãos"), a menos que você tenha uma carta que lhes permita roubar ou que os outros jogadores não percebam o que você fez. Se você estiver carregando dois elmos, por exemplo, apenas um deles poderá ajudá-lo. Você deve girar as cartas 90º para indicar quais itens não podem ajudá-lo ou itens sobressalentes que não estão sendo usados. Você NÃO pode trocar de elmo durante um combate ou quanod estiver tentando fugir (por exemplo).',
            5: 'A Venda de Itens: Durante o seu turno, você pode descartar itens cuja soma dê 1000 peças de ouro e ganhar um nível imediatamente. Se, por exemplo, descartar um total de 1.100 peças de outro em itens, você não receberá o troco. Mas se conseguir juntar um total de 2.000 peças de ouro, você pode ganhar dois níveis de uma só vez, e assim por diante. Você também pode descartar itens da sua mão, além daqueles que estiver carregando.',
            6: 'Os Halflings ganham um bônus ao vender itens.',
            7: 'Você não pode vender, trocar nem roubar itens DURANTE um combate. No momento em que uma carta de monstro é revelada, você precisa terminar o combate com o equipamento que tem.'
        }
    },
    9: {
        title: 'QUANDO JOGAR AS CARTAS',
        content: {
            0: 'As instruções que aparecem nas cartas sempre têm precedência sobre as regras gerais. Contudo, nenhuma carta pode reduzir o Nível de um monstro ou de um jogador a um valor menor ou igual a 0. Além disso, nenhum jogador pode chegar ao 10º Nível se não for matando um monstro.'
        },
        more: {
            0: {
                subtitle: 'MONSTROS',
                content: {
                    0: 'Se um monstro for comprado aberto durante a fase "Abra Uma Porta", ele tem de ser enfrentado imediatamente pela pessoa que o tiver comprado.',
                    1: 'Se for adquirido de qualquer outra forma, a carta de monstro pode ser baixada durante a fase "Vá Atrás de Confusão" ou então usada em outro jogador junto com a carta Monstro Errante.',
                    2: 'Em termos de regras, cada carta de monstro representa um único monstro, mesmo que o nome da carta esteja no plural.'
                }
            },
            1: {
                subtitle: 'AMPLIADORES DE MONSTROS',
                content: {
                    0: '"Ancião", "Enfurecido", "Inteligente" e "Imenso" aumentam o nível dos mosntros (e "Bebê" reduz o nível). "Monstro Errante" e "Parceiro" trazem um outro monstro para o combate. Essas cartas podem ser usadas durante qualquer combate.',
                    1: 'Todos os ampliadores são somados, e tudo que amplia um monstro amplia o seu parceiro... se as cartas Ancião, Enfurecido e Parceiro forem usadas juntas, em qualquer ordem, você enfrentará um monstro ancião enfurecido e o seu parceiro ancião enfurecido. Contudo, se já houver dois monstros diferentes em jogo, devido ao efeito da carta Monstro Errante, o jogador que usar o amplificador terá de escolher em qual monstro o efeito será aplicado.'
                }
            },
            2: {
                subtitle: 'TESOUROS - COMO BAIXAR',
                content: {
                    0: 'Qualquer carta de tesouro pode ser baixada na mesa assim que você consegui-la, ou a qualquer momento durante o seu turno.',
                    1: 'Algumas cartas de Tesouro são "especiais" (como as "Suba um Nível"). Você pode usar essas cartas a qualquer momento, a menos que a própria carta não o permita. Siga as instruções e depois descarte-a.'
                }
            },
            3: {
                subtitle: 'TESOUROS - COMO USAR',
                content: {
                    0: 'Qualquer carta instantânea ("uso único") pode ser usada durante qualquer compbate, independente de ele estar na mesa ou na sua mão.',
                    1: 'Os outros itens mágicos não podem ser usados a menos que estejam em jogo. Se estiver no seu turno, você pode baixá-las e usá-las imediatamente. Se estiver ajudando alguém, ou combatendo fora do seu próprio turno por algum motivo, você não pode transferir novos itens de sua mão para a mesa.'
                }
            },
            4: {
                subtitle: 'MALDIÇÕES',
                content: {
                    0: 'Se forem compradas abertas, durante a fase "Abra Uma Porta", elas são aplicadas à pessoa que as tiver comprado.',
                    1: 'Se forem compradas fechadas ou adquiridas de alguma outra forma, elas podem ser usadas em QUALQUER jogador a QUALQUER momento. A qualquer momento, você entendeu? Reduzir as habilidades de alguém, no momento em que ele pensou que havia matado um monstro é muito divertido!',
                    2: 'Uma maldição afeta sua vítima imediatamente (se for capaz), depois é descartada.',
                    3: 'Exceções: A carta "Mudança de Sexo" impõe uma penalidade ao seu próximo combate e a carta "Galinha na Cabeça" fica lá um turno atrás do outro... Você fica com essas cartas até se livrar da maldição.',
                    4: 'Se uma maldição puder ser aplicada a mais de um item, a vítima escolhe qual item será perdido ou amaldiçoado.',
                    5: 'Se uma maldição for aplicada a alguma coisa que você não tem, ignore-a. Se você, por exemplo, comprar a carta "Perca sua Armadura" e não estiver carregando uma armadura, a maldição não terá efeito e será descartada.'
                }
            },
            5: {
                subtitle: 'CLASSES E RAÇAS',
                content: {
                    0: 'Essas cartas podem ser baixadas na mesa assim que forem adquiridas ou a qualquer momento durante o seu próprio turno.',
                }
            },
            6: {
                subtitle: 'MESTIÇO E SUPER MUNCHKIN',
                content: {
                    0: 'Essas cartas permitem que você tenha, respectivamente, duas raças e duas classes.',
                    1: 'Você pode baixar a carta Mestiço a qualquer momento em que houver uma carta de raça em jogo; você, então, será metade daquela raça e meio-humano. Você pode adicionar uma segunda raça no mesmo momento ou então depois, desde que você ainda tenha a carta Mestiço na mesa; você então, será (por exemplo) meio-Elfo e meio-Anão, e terá as vantagens e desvantagens de ambas as raças. Você perde a carta Mestiço a qualquer momento em que não tiver nenhuma carta de raça em jogo.',
                    2: 'Você pode baixar a carta Super Munchkin a qualquer momento em que tiver uma classe em jogo e uma segunda carta de classe pode acrescentar a ela. Você perde a carta Super Munchkin se perder qualquer uma das cartas de classe.'
                }
            }
        }
    },
    10: {
        title: 'OUTRAS COISAS DO MUNCHKIN',
        content: {
            0: 'Haverá momentos em que será útil jogar uma Maldição ou um monstro contra você mesmo ou para "ajudar" outro jogador, de modo a custar-lhe um tesouro. Esse é o estilo do Munchkin. Use e abuse!'
        },
        more: {
            0: {
                subtitle: 'FAZENDO TROCAS',
                content: {
                    0: 'Você pode trocar Itens (e nenhum outro tipo de carta) com os outros jogadores. Você só pode trocar itens que estiverem na mesa - nunca os que se encontram em sua mão. Você pode fazer trocas a qualquer momento exceto quando estiver num combate - na realidade, o melhor momento para se fazer uma troca é fora do seu turno. Qualquer item que você receber numa troca terá de ir direto para a mesa e você só poderá vendê-lo quando estiver no seu turno.',
                    1: 'Você também pode simplesmente distribuir seus itens sem pedir outros em troca, para (por exemplo) subornar outros jogadores - "Eu te dou minha Armadura Flamejante se você não ajudar o Zé a lutar contra aquele dragão!".',
                    2: 'Você pode mostrar todas as cartas da sua mão para os outros jogadores. Como se pudéssemos tentar impedí-lo...'
                }
            },
            1: {
                subtitle: 'INTERFERINDO NO COMBATE',
                content: {
                    0: 'Você pode interferir nos combates dos outros de diversas maneiras:',
                    1: 'Use uma carta instantânea. Se você tiver uma poção, você pode ajudar alguém, usando-a contra o inimigo dele. Obviamente, você pode "errar o alvo" e acertar seu amigo com a poção, fazendo com que ela conte contra ele.',
                    2: 'Use uma carta para ampliar um monstro. São essas cartas que deixam os monstros reamente assustadores... e fazem com que eles dêem mais tesouros. Você pode usá-las tanto durante os seus combates quanto durante os combates dos outros jogadores.',
                    3: 'Apunhale um jogador pelas Costas durante o combate, se você for um Ladrão.',
                    4: 'Amaldiçoe os outros jogadores, se tiver uma carta de maldição.'
                }
            },
            2: {
                subtitle: 'DISPUTAS E CONTRADIÇÕES DE REGRAS',
                content: {
                    0: 'Quando as cartas entrarem em conflito com as regras, siga as instruções das cartas. Quaisquer outras contradições devem ser resolvidas pelos jogadores com as vozes alteradas, sendo que cabe ao dono do jogo a última palavra.',
                }
            }
        }
    }
}

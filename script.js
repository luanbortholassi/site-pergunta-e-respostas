const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o impacto da inteligência artificial na automação de tarefas em diferentes indústrias?",
        alternativas: [
            {
                texto: "Isso vai ser muito ruim!",
                afirmacao: "pode aumentar a depêcia de sistemas tecnológicos, tornando difícil operar sem eles e aumentando a vulnerabilidade a falhas tecnológicas."
            },
            {
            
                texto: "Isso vai ser muito bom.",
                afirmacao: "Automação pode reduzir custos operacionais ao diminuir a necessidade de mão de obra humana e minimizar erros, economizando tempo e recursos.",
            }
        ]
    },
    {
        enunciado: "Como a inteligência artificial pode melhorar os cuidados de saúde?",
        alternativas: [
            {
                texto: "isso pode ser bom para descobertas de medicamentos e analisar imagens médicas?",
                afirmacao: "provavelmente sim."
            },
            {
                texto: "isso poderia ter erros médcos, tipos em cirurgias e exames?",
                afirmacao: "talvez não."
            }
        ]
    },
    {
        enunciado: "como a inteligência artificial pode ajudar na prevenção de doenças?",
        alternativas: [
            {
                texto: "ela pode ajudar em exames médicos avançados e bem antes da doença aparecer!",
                afirmacao: "sim, ela seria muito útil nesse quesito"
            },
            {
                texto: "ela poderia errar nos exames e acabar confundindo o médico",
                afirmacao: "ela poderia errar"
            }
        ]
    },
    {
        enunciado: "Como a inteligência artificial pode melhorar a experiência do paciente durante o tratamento médico",
        alternativas: [
            {
                texto: "a IA pode oferecer suporte personalizado e lembretes de medicação, tornando o tratamento mais eficaz?",
                afirmacao: "sim, ela teria uma boa precisão nos tratamentos"
            },
            {
                texto: "A dependência excessiva de assistentes virtuais baseados em IA pode reduzir a interação humana, o que pode fazer alguns pacientes se sentirem menos compreendidos e cuidados",
                afirmacao: "não, os pacientes iriam se sentir desconfortaveis"
            }
        ]
    },
    {
        enunciado: "como a inteligência artificial pode impactar a educação no futuro?",
        alternativas: [
            {
                texto: "A IA pode personalizar o aprendizado, adaptando o conteúdo ao ritmo e estilo de cada aluno, melhorando o seu desempenho acadêmico ",
                afirmacao: "sim, os alunos teriam bastante facilidade"
            },
            {
                texto: "O uso excessivo de IA na educação pode diminuir a interação humana, potencialmente limitando o desenvolvimento de habilidades sociais e emocionais dos alunos",
                afirmacao: "não, alguns alunos teriam alguma certa dificuldades"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

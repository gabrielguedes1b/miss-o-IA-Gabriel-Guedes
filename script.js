const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o principal objetivo da inteligência artificial?",
        alternativas: [
            {
            texto:"A) Substituir completamente o trabalho humano em todas as áreas.",
            afirmação : afirmação
            },
            {
                texto:"B) Automatizar tarefas específicas e fornecer suporte para decisões humanas."
            afirmação : afirmação
           }
            ]
    },
    {
        enunciado: "Qual das seguintes técnicas é comumente usada em aprendizado de máquina?",
        alternativas: [
            {
            texto:"A) Algoritmos de classificação.",
              afirmacao: "afirmação"
            }
              {
                texto:"B) Técnicas de pintura digital."
                afirmacao: "afirmação"
            }
            
          
        ]
    },
    {
        enunciado: "O que é um modelo de linguagem na inteligência artificial?",
        alternativas: [
            texto: "A) Um programa que gera gráficos e imagens baseadas em texto.",

            "texto: B) Um sistema que entende e gera texto em linguagem natural."
        ]
    },
    {
        enunciado: "Qual é a principal diferença entre inteligência artificial estreita e inteligência artificial geral?",
        alternativas: [
            "A) A IA estreita é especializada em uma tarefa específica, enquanto a IA geral possui capacidades cognitivas amplas e pode realizar uma ampla gama de tarefas.",
            "B) A IA estreita é capaz de aprender e adaptar-se a novas tarefas com facilidade, enquanto a IA geral é limitada a um conjunto fixo de funções."
        ]
    },
    {
        enunciado: "Qual é um dos maiores desafios éticos associados à inteligência artificial?",
        alternativas: [
            "A) Garantir que os algoritmos não discriminem ou prejudiquem grupos específicos de pessoas.",
            "B) Desenvolver sistemas de IA que podem substituir completamente a criatividade humana."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
import React, { useState } from "react";
import styles from "./style.module.scss";

interface Pergunta {
  pergunta: string;
  respostas: string[];
  respostaCerta: number;
}

function Quiz() {
  const perguntas: Pergunta[] = [
    {
      pergunta: "Qual o nosso dia?",
      respostas: ["14", "15", "16", "17"],
      respostaCerta: 0,
    },
    {
      pergunta: "O nome do nosso cachorro será?",
      respostas: ["Rex", "Rakan", "Lulu", "Nunu"],
      respostaCerta: 1,
    },
    {
      pergunta: "Você é o amor da minha vida?",
      respostas: ["Sim", "Obvio!"],
      respostaCerta: 1,
    },
    {
      pergunta: "Você aceita casar comigo? (pedido não oficial :) )",
      respostas: ["Sim", "Não"],
      respostaCerta: 0,
    },
  ];

  const [perguntaAtual, setPerguntaAtual] = useState(0);

  const handleResponse = (indexResposta: number) => {
    switch (indexResposta) {
      case perguntas[perguntaAtual].respostaCerta:
        document.getElementById(
          indexResposta.toString()
        )!.style.backgroundColor = "green";

        setTimeout(() => {
          document.getElementById(
            indexResposta.toString()
          )!.style.backgroundColor = "#733E75";
          setPerguntaAtual(perguntaAtual + 1);
        }, 1000);

        break;
      default:
        document.getElementById(
          indexResposta.toString()
        )!.style.backgroundColor = "red";

        setTimeout(() => {
          document.getElementById(
            indexResposta.toString()
          )!.style.backgroundColor = "#733E75";
        }, 1000);
        break;
    }
  };

  const pergunta = perguntas[perguntaAtual];

  return (
    <div className={styles.quiz}>
      <div>
        {(pergunta && (
          <div>
            <h1>Quiz</h1>
            <h2>{pergunta.pergunta}</h2>
            <ul className={styles.respostas}>
              {pergunta.respostas.map((resposta, indexResposta) => (
                <li key={indexResposta}>
                  <button
                    onClick={() => handleResponse(indexResposta)}
                    id={indexResposta.toString()}
                  >
                    {resposta}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )) || <h1>Je t'aime</h1>}
      </div>
    </div>
  );
}

export default Quiz;

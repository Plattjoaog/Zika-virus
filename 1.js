const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

const corrigirProva = (prova) => {
    let questoesCorretas = 0;

    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            questoesCorretas++;
        }
    }

    let valorPorQuestao = prova.valor / prova.questoes.length;
    let notaDaProva = valorPorQuestao * questoesCorretas;

    if (questoesCorretas === 0) {
        console.log(`${prova.aluno} não acertou qualquer questão e obteve nota 0`);
    } else if (questoesCorretas === 1) {
        console.log(`O aluno(a) ${prova.aluno} acertou 1 questão e obteve nota ${notaDaProva}`);
    } else {
        console.log(`O aluno(a) ${prova.aluno} acertou ${questoesCorretas} questoes e obteve nota ${notaDaProva}`);
    }
}


corrigirProva(prova);
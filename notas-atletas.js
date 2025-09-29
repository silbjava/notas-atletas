/**
 * Função que calcula e exibe a média válida das notas de um atleta,
 * desconsiderando a maior e a menor nota atribuída.
 *
 * @param {Array<Object>} atletas - Uma matriz de objetos, onde cada objeto
 * possui 'nome' (string) e 'notas' (Array<number>).
 */
function calcularMediaAtletas(atletas) {
    // 1. Itera sobre cada objeto de atleta na matriz 'atletas'.
    for (let i = 0; i < atletas.length; i++) {
        const atleta = atletas[i];
        const nome = atleta.nome;
        // Cria uma cópia da matriz de notas para ordenação, garantindo que o array original não seja alterado.
        let notasParaCalculo = [...atleta.notas];

        // 2. Ordena as notas em ordem crescente (a - b) para identificar
        // facilmente a menor e a maior nota.
        notasParaCalculo.sort((a, b) => a - b);

        // 3.Elimina a maior e a menor nota.
        const notasValidas = notasParaCalculo.slice(1, 4);

        // 4. Calcula a soma das notas válidas.
        let somaNotas = notasValidas.reduce((acumulador, atual)=>{
            return acumulador += atual;
        })

        // 5. Calcula a média. O divisor é o número de notas válidas (sempre 3 neste caso).
        // Usamos .length para manter a robustez.
        const mediaValida = somaNotas / notasValidas.length;

        // --- Saída para o Usuário ---
        console.log(`Atleta: ${nome}`);

        console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);

        console.log(`Média Válida: ${mediaValida}`);

        // Adiciona uma linha em branco para separar a saída de cada atleta.
        console.log('');
    }
}

// --- Entrada de Dados (Matriz de Objetos) ---

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// --- Execução da Função ---
calcularMediaAtletas(atletas);
# notas-atletas
# 🏅 Project: Cálculo de Média Válida para Atletas Olímpicos

## 🌟 Visão Geral do Projeto

Este projeto em **JavaScript** implementa uma solução eficiente para o cálculo de médias de pontuações de atletas, simulando o sistema de avaliação utilizado em diversas competições. O diferencial da solução é o método de **cálculo de média válida**, que descarta as pontuações mais extremas (a maior e a menor nota) para garantir uma avaliação mais justa e representativa do desempenho.

Este repositório demonstra habilidades em:

* Manipulação avançada de **Arrays de Objetos** em JavaScript.
* Utilização de métodos nativos de Array como `sort()`, `slice()`, e `reduce()`.
* Implementação de lógica de negócios específica (descarte de outliers).
* Estruturação de código limpo, eficiente e bem documentado.

## 🎯 Requisito de Negócio

O objetivo é processar uma matriz de objetos contendo o **nome do atleta** e **cinco notas** atribuídas por juízes. A função deve:

1.  **Iterar** sobre a lista completa de atletas.
2.  **Identificar e eliminar** a maior e a menor nota de cada atleta.
3.  **Calcular a média aritmética** das três notas restantes (a "Média Válida").
4.  **Apresentar** de forma clara o nome do atleta, as notas originais e a Média Válida calculada.

## ⚙️ Detalhes da Implementação

A função principal é `calcularMediaAtletas(atletas)`.

### Estratégia de Filtragem de Notas (Descarte de Outliers)

Para garantir o descarte eficiente da maior e da menor nota, o algoritmo segue os seguintes passos dentro de cada iteração:

1.  **Criação de Cópia:** Uma cópia do array de notas (`[...atleta.notas]`) é criada para evitar a alteração do array de dados original.
2.  **Ordenação:** O array de cópia é ordenado numericamente usando `Array.prototype.sort((a, b) => a - b)`. Após a ordenação, a menor nota é sempre o primeiro elemento (`[0]`) e a maior nota é o último elemento.
3.  **Seleção das Notas Válidas:** O método `Array.prototype.slice(1, 4)` é utilizado. Ele seleciona um subconjunto do array, **começando no índice 1** (ignorando a menor nota no índice 0) e **terminando no índice 4** (ignorando a maior nota no índice 4, que é o último elemento em um array de 5 notas).

Esta abordagem é **concisa, legível e de alto desempenho**, ideal para este tipo de problema.

### Cálculo da Média

A soma é realizada de forma simples usando `Array.prototype.forEach()`, e a média é calculada dividindo a soma pelo `Array.prototype.length` das notas válidas (que sempre será 3).

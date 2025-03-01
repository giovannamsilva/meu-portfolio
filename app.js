document.addEventListener("DOMContentLoaded", function() {
    const projetos = [
        {
            titulo: "Meu portfólio!",
            descricao: "Este site foi criado por mim mesma utilizando apenas HTML, CSS e JavaScript. Tem como objetivo"
                      + " apresentar e descrever um pouco dos meus projetos.",
            github: "https://github.com/giovannamsilva/meu-portfolio"
        },        
        {
            titulo: "Compra de Ingresso",
            descricao: "Este site foi desenvolvido em uma aula de Lógica de Programação utilizando JavaScript, "
                     + "através da plataforma Alura. Tem como objetivo ser um site para compra de ingressos online, "
                     + "onde o usuário pode ver quais são os tipos, preços e quantidade atual de cada ingresso. "
                     + "A quantidade de ingresso é atualizada a cada compra, subtraindo os valores de ingressos comprados "
                     + "e atualizando a quantidade de ingressos após a compra.",
            github: "https://github.com/giovannamsilva/compra-de-ingresso"
        },        
        {
            titulo: "Amigo Secreto",
            descricao: "Este site foi desenvolvido em uma aula de Lógica de Programação utilizando JavaScript, "
                     + "através da plataforma Alura. É utilizado para sortear nomes para a famosa brincadeira do amigo secreto. Neste site, uma pessoa "
                     + "fica responsável pelo sorteio do jogo. Esta pessoa adiciona o nome de todos os participantes da brincadeira, e "
                     + "pode sortear um nome para cada participante.",
            github: "https://github.com/giovannamsilva/amigo-secreto"
        },
        {
            titulo: "Carrinho de compras",
            descricao: "Este site foi desenvolvido em uma aula de Lógica de Programação utilizando JavaScript, "
                     + "através da plataforma Alura. Simulação de um carrinho de compras de uma loja online de eletrônicos."
                     + " O usuário pode escolher o tipo e a quantidade de eletrônicos que ele deseja comprar. Ao adicionar no carrinho, "
                     + "o valor total da compra é alterado. Também é possível limpar o carrinho de compras.",
            github: "https://github.com/giovannamsilva/carrinho-de-compras"
        },
        {
            titulo: "AluGames",
            descricao: "Este site foi desenvolvido em uma aula de Lógica de Programação utilizando JavaScript, "
                     + "através da plataforma Alura. Simulação de um site de aluguel de jogos, onde o usuário pode "
                     + "alugar ou devolver um jogo.",
            github: "https://github.com/giovannamsilva/AluGames"
        },
        {
            titulo: "Jogo do número secreto",
            descricao: "Este jogo foi desenvolvido em uma aula de Lógica de Programação utilizando JavaScript, "
                     + "através da plataforma Alura. Neste jogo, o usuário chuta números de 1 à 100, até acertar o número "
                     + "que foi sorteado. Utilizando JavaScript, fiz um sistema que sorteia automaticamente o número, sem dizê-lo ao usuário. "
                     + "A cada chute é retornado se está correto ou não, e caso não esteja, o jogo retorna se o número "
                     + "sorteado é maior ou menor que o número chutado.Caso o número chutado seja o mesmo que o número sorteado, o jogo retorna " 
                     + "em quantos chutes o usuário acertou. Também é possivel iniciar um novo jogo clicando no botão Novo Jogo. "
                     + " O site também conta com auxílio sonoro para pessoas com deficiência visual.",
            github: "https://github.com/giovannamsilva/jogo-do-numero-secreto"
        },
        {
            titulo: "Sorteador de números",
            descricao: "Este site foi desenvolvido em uma aula de Lógica de Programação utilizando JavaScript, "
                     + "através da plataforma Alura. Neste site o usuário diz quantos números ele quer sortear. "
                     + "Depois ele diz o intervalo de números, por exemplo: entre 1 e 100. É retornado os números sorteados "
                     + "sem que nenhum deles sejam repetidos. Caso queira sortear novos números, o usuário deve clicar em Reiniciar.",
            github: "https://github.com/giovannamsilva/sorteador-de-numeros"
        }
    ];

    const tituloProjeto = document.getElementById("titulo-projeto");
    const descricaoProjeto = document.getElementById("descricao-projeto");
    const botaoGitHub = document.getElementById("link-github");

    if (tituloProjeto && descricaoProjeto && botaoGitHub) {
        let projetoAtual = 0;

        function atualizarProjeto() {
            tituloProjeto.textContent = projetos[projetoAtual].titulo;
            descricaoProjeto.textContent = projetos[projetoAtual].descricao;
            botaoGitHub.href = projetos[projetoAtual].github;
        }

        document.getElementById("proximo").addEventListener("click", function() {
            projetoAtual = (projetoAtual + 1) % projetos.length;
            atualizarProjeto();
        });

        document.getElementById("anterior").addEventListener("click", function() {
            projetoAtual = (projetoAtual - 1 + projetos.length) % projetos.length;
            atualizarProjeto();
        });

        atualizarProjeto(); 
    }

    const listaProjetos = document.getElementById("lista-projetos");
    if (listaProjetos) {
        projetos.forEach(projeto => {
            const divProjeto = document.createElement("div");
            divProjeto.classList.add("projeto");

            divProjeto.innerHTML = `
                <div class="texto-projeto">
                    <h2>${projeto.titulo}</h2>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.github}" class="botao-github" target="_blank">GitHub</a>
                </div>
            `;

            listaProjetos.appendChild(divProjeto);
        });
    }

    const anoFooter = document.getElementById("ano-atual");
    if (anoFooter) {
        anoFooter.textContent = new Date().getFullYear();
    }
});

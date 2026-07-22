// ARQUIVO SEPARADO: pirata_data.js - APENAS PLATAFORMAS PIRATAS E CLONES

const piratas = [
    {
        nome: "Jogo do Tigrinho Oficial",
        urlSuspeita: "jogodotigrinho.com",
        motivoBloqueio: "Hospedado fora da jurisdição nacional e sem auditorias. Softwares piratas ajustados diretamente para zerar as contas.",
        risco: "CRÍTICO - Capture ilícita de dados Pix e impossibilidade operacional de retirada de valores."
    },
    {
        nome: "Tigre VIP Bet",
        urlSuspeita: "tigrevip.top",
        motivoBloqueio: "Clonagem de interface visual de jogos populares da PG Soft. Domínio instável criado para capturar aportes rápidos e sumir.",
        risco: "CRÍTICO - Estelionato financeiro direto por links falsos."
    },
    {
        nome: "Subway Bets",
        urlSuspeita: "subwaybets.vip",
        motivoBloqueio: "Uso ilegalmente visual de franquias famosas para capturar depósitos sem nenhuma garantia regulamentar.",
        risco: "CRÍTICO - Bloqueio de contas de usuários de forma arbitrária."
    }
];

// Deixa a lista de piratas disponível para o indexador global
window.piratasSeparados = piratas;
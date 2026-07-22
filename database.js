// ARQUIVO: database.js - UNIFICADOR CENTRAL DO BANCO DE DADOS
// Junta os lotes das bets autorizadas com a sua pasta de piratas de forma leve.

const BETS_DATABASE = {
    // Puxa automaticamente todas as operadoras acumuladas do lote 1 ao lote 12
    listaMestreOficial: window.LOTE_OFICIAIS || [],
   
    // Puxa automaticamente o catálogo que está dentro do seu arquivo pirate_data.js
    piratas: window.piratasSeparados || window.piratas || []
};

// Expõe globalmente para o motor do app.js ler de forma infalível
window.BETS_DATABASE = BETS_DATABASE;
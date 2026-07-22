// ARQUIVO NOVO: db_lote29.js - LOTE 29 (ABERTURA DAS OPERADORAS INTERMEDIÁRIAS / INTERNACIONAIS)
// Padrão otimizado com 8 operadoras por lote para manter o sistema ultra leve.

if (!window.LOTE_OFICIAIS) window.LOTE_OFICIAIS = [];

window.LOTE_OFICIAIS.push(
    {
        nome: "1xBet Internacional",
        radical: "1xbet",
        dominioOficial: "1xbet.com",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença Curaçao eGaming nº 1668/JAZ",
        estatisticas: { notaReclameAqui: "6.2/10 (Regular)", tempoSaque: "Até 2 horas via PIX local", suporte: "E-mail e Chat Internacional" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Uma das maiores variedades de odds e campeonatos do planeta. [NEGATIVO]: Histórico alto de travas preventivas de segurança em saques para contas que acumulam bônus de cupons sem validação prévia de identidade."
    },
    {
        nome: "BC.Game Global",
        radical: "bcgame",
        dominioOficial: "bc.game",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença Curaçao Master nº 5536/JAZ",
        estatisticas: { notaReclameAqui: "7.1/10 (Bom)", tempoSaque: "Instantâneo via Gateways PIX", suporte: "Chat Ao Vivo 24h" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Excelente ecossistema de recompensas diárias e jogos originais rápidos (Crash). [NEGATIVO]: Opera fora da extensão nacional .bet.br. Disputas financeiras complexas têm respaldo limitado na justiça brasileira."
    },
    {
        nome: "Mostbet Brasil",
        radical: "mostbet",
        dominioOficial: "mostbet.com",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença Bizbon N.V. Curaçao",
        estatisticas: { notaReclameAqui: "6.3/10 (Regular)", tempoSaque: "Até 1 hora via PIX local", suporte: "Chat Online 24h" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Foco massivo em rodadas grátis semanais para cassino e slots. [NEGATIVO]: Rollover promocional complexo. Recomenda-se rejeitar os bônus de boas-vindas se quiser sacar seus ganhos de forma imediata."
    },
    {
        nome: "Melbet Global",
        radical: "melbet",
        dominioOficial: "melbet.com",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença Pelican Entertainment Curaçao",
        estatisticas: { notaReclameAqui: "6.2/10 (Regular)", tempoSaque: "Até 3 horas via gateways", suporte: "E-mail e Chat Online" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Plataforma robusta com ferramentas analíticas e dados ao vivo ideais para traders esportivos. [NEGATIVO]: O suporte humanizado em português apresenta filas longas em horários de rodadas do futebol europeu."
    },
    {
        nome: "Dafabet Brasil",
        radical: "dafabet",
        dominioOficial: "dafabet.com",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença CEG Curaçao / Isle of Man",
        estatisticas: { notaReclameAqui: "7.3/10 (Bom)", tempoSaque: "Até 45 minutos via PIX", suporte: "Chat Ao Vivo 24h" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Gigante do mercado asiático com limites de apostas muito altos para profissionais. [NEGATIVO]: O design visual do portal é antigo e considerado confuso para usuários iniciantes."
    },
    {
        nome: "Betwinner",
        radical: "betwinner",
        dominioOficial: "betwinner.com",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença Prevailer B.V. Curaçao",
        estatisticas: { notaReclameAqui: "6.1/10 (Regular)", tempoSaque: "Até 2 horas via PIX", suporte: "E-mail e Chat Ao Vivo" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Cobertura excelente de estatísticas alternativas e ligas de nicho. [NEGATIVO]: Exige um volume alto de rotação de saldo (rollover) para liberar ganhos advindos de depósitos em dias de semana."
    },
    {
        nome: "22Bet Brasil",
        radical: "22bet",
        dominioOficial: "22bet.com",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença TechSolutions Group Curaçao",
        estatisticas: { notaReclameAqui: "6.4/10 (Regular)", tempoSaque: "Até 1 hora via PIX", suporte: "Chat Online 24h" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Aplicativo mobile muito estável e leve para Android e iOS. [NEGATIVO]: Retiradas promocionais requerem auditoria prévia de segurança, o que pode estender o prazo do PIX em finais de semana."
    },
    {
        nome: "Megapari",
        radical: "megapari",
        dominioOficial: "megapari.com",
        linkAfiliado: "https://seu-link-aqui.com",
        status: "Intermediaria",
        cnpj: "Intermediadora Local Ativa",
        autorizacao: "Licença VDL Arrow B.V. Curaçao",
        estatisticas: { notaReclameAqui: "7.0/10 (Bom)", tempoSaque: "Até 30 minutos via PIX", suporte: "Chat das 08h às 00h" },
        alerta: "⚠️ ANÁLISE INTERMEDIÁRIA: [POSITIVO]: Programa robusto de cashback (reembolso) semanal sobre perdas líquidas. [NEGATIVO]: Contas duplicadas ou acessadas do mesmo sinal Wi-Fi (IP compartilhado) são suspensas de forma preventiva imediata."
    }
);

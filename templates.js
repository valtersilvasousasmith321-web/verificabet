// ARQUIVO SEPARADO: templates.js - LAYOUTS VISUAIS DOS CARDS
// Isolado em variáveis globais simples para evitar erros de fechamento no motor de busca.

const VISUAL_TEMPLATES = {
    // Template para Plataformas Autorizadas
    cardVerde: function(p) {
        return `
            <div class="card card-verde" style="background: #1e2b24; border: 1px solid #00ff88; padding: 20px; border-radius: 8px; margin-top: 20px; color: #fff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid rgba(0,255,136,0.2); padding-bottom: 10px;">
                    <h3 style="margin: 0; color: #00ff88; font-size: 20px;">${p.nome} ✔️</h3>
                    <span style="background: #00ff88; color: #121212; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">Autorizada SPA/MF</span>
                </div>
                <p style="margin: 6px 0; font-size: 14px;"><strong>Status:</strong> <span style="color: #00ff88; font-weight: bold;">Regularizada</span></p>
                <p style="margin: 6px 0; font-size: 14px;"><strong>Domínio Regulamentado:</strong> <span style="color: #00bfff; font-family: monospace;">${p.dominioOficial}</span></p>
                <div class="dados-institucionais" style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 6px; margin: 12px 0; font-size: 13px; border-left: 3px solid #888;">
                    <p style="margin: 3px 0;"><strong>CNPJ Oficial:</strong> ${p.cnpj}</p>
                    <p style="margin: 3px 0;"><strong>Registro Governamental:</strong> ${p.autorizacao}</p>
                </div>
                <div class="painel-estatisticas" style="background: rgba(0, 255, 136, 0.03); border: 1px solid rgba(0, 255, 136, 0.15); padding: 12px; border-radius: 6px; margin: 12px 0;">
                    <h4 style="margin: 0 0 8px 0; color: #00ff88; font-size: 13px;">📊 Métricas de Operação do Portal:</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 12px; color: #ddd;">
                        <li style="margin-bottom: 4px;"><strong>Índice Reclame Aqui:</strong> ${p.estatisticas.notaReclameAqui}</li>
                        <li style="margin-bottom: 4px;"><strong>Velocidade de Retirada:</strong> ${p.estatisticas.tempoSaque}</li>
                        <li style="margin-bottom: 4px;"><strong>Canais de Atendimento:</strong> ${p.estatisticas.suporte}</li>
                    </ul>
                </div>
                <div class="caixa-alerta-exclusivo" style="background: rgba(255, 165, 0, 0.05); border: 1px solid rgba(255, 165, 0, 0.2); padding: 12px; border-radius: 6px; margin: 12px 0; font-size: 13px; color: #ffa500; line-height: 1.4;">
                    <p style="margin: 0;">${p.alerta}</p>
                </div>
                <a href="${p.linkAfiliado}" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; background: #00ff88; color: #121212; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 15px; box-shadow: 0 4px 10px rgba(0,255,136,0.2);">
                    Acessar Plataforma Oficial (Link Seguro)
                </a>
            </div>
        `;
    },

    // Template para Plataformas Piratas
    cardVermelho: function(pirata) {
        return `
            <div class="card card-vermelho" style="background: #3a1e1e; border: 1px solid #ff3333; padding: 20px; border-radius: 8px; margin-top: 20px; color: #fff;">
                <h3 style="margin-top: 0; color: #ff3333; font-size: 20px;">⚠️ RISCO DETECTADO: ${pirata.nome}</h3>
                <p style="margin: 6px 0; font-size: 14px;"><strong>URL Alvo:</strong> <span style="font-family: monospace; color: #ff6666;">${pirata.urlSuspeita}</span></p>
                <p style="margin: 6px 0; font-size: 14px;"><strong>Motivo da Restrição:</strong> ${pirata.motivoBloqueio}</p>
                <div style="background: rgba(255,51,51,0.1); padding: 12px; border-radius: 6px; border-left: 4px solid #ff3333; margin-top: 12px; font-size: 13px; line-height: 1.4;">
                    <strong>Risco Operacional:</strong> ${pirata.risco}
                </div>
            </div>
        `;
    },

    // Template para Plataformas Não Encontradas
    cardAmarelo: function() {
        return `
            <div class="card card-amarelo" style="background: #2b2b1e; border: 1px solid #ffcc00; padding: 20px; border-radius: 8px; margin-top: 20px; color: #fff;">
                <h3 style="margin-top: 0; color: #ffcc00; font-size: 20px;">⚠️ PLATAFORMA NÃO LOCALIZADA</h3>
                <p style="font-size: 14px; line-height: 1.5;">O termo pesquisado não consta mapeado como operadora regulamentada pela SPA/MF no Brasil.</p>
                <p style="background: rgba(255,204,0,0.1); padding: 10px; border-radius: 4px; border-left: 4px solid #ffcc00; font-size: 13px; margin-top: 12px;">
                    <strong>Recomendação de Segurança:</strong> Se o endereço deste jogo não utilizar a terminação oficial e obrigatória <strong>.bet.br</strong>, evite inserir dados ou realizar aportes financeiros.
                </p>
            </div>
        `;
    }
};

window.VISUAL_TEMPLATES = VISUAL_TEMPLATES;
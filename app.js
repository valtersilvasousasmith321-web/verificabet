// ARQUIVO: app.js - MOTOR DE BUSCA ULTRA LEVE E SEGURO
window.verificarCheckbox = function() {
    const chk = document.getElementById('chkMaioridade');
    const btn = document.getElementById('btnAceitar');
    if (chk && btn) btn.disabled = !chk.checked;
};

window.aceitarTermos = function() {
    const chk = document.getElementById('chkMaioridade');
    const mod = document.getElementById('modalTermos');
    const principal = document.getElementById('conteudoPrincipal');
    if (chk && !chk.checked) return;
    if (mod) mod.style.display = 'none';
    if (principal) {
        principal.style.display = 'block';
        principal.classList.remove('conteudo-oculto');
    }
};

window.verificarPlataforma = function() {
    const input = document.getElementById('inputBusca');
    const resultado = document.getElementById('areaResultado');
    const db = window.BETS_DATABASE;
    const tpl = window.CARD_TEMPLATES;
    if (!input || !resultado || !db || !tpl) return;

    const termo = input.value.trim().toLowerCase();
    if (termo === "") {
        resultado.innerHTML = "<p style='color:#ffcc00;font-weight:bold;'>Por favor, digite o nome.</p>";
        return;
    }

    const autorizada = db.listaMestreOficial.find(p => {
        const nome = (p.nome || "").toLowerCase();
        const rad = (p.radical || "").toLowerCase();
        const dom = (p.dominioOficial || "").toLowerCase();
        return termo.includes(rad) || rad.includes(termo) || termo.includes(nome) || nome.includes(termo) || termo.includes(dom);
    });

    if (autorizada) {
        resultado.innerHTML = tpl.verde(autorizada);
        return;
    }

    const pirata = db.piratas.find(p => {
        const nomeP = (p.nome || "").toLowerCase();
        const urlP = (p.urlSuspeita || "").toLowerCase();
        return termo.includes(nomeP) || nomeP.includes(termo) || termo.includes(urlP);
    });

    if (pirata) {
        resultado.innerHTML = tpl.vermelho(pirata);
        return;
    }

    resultado.innerHTML = tpl.amarelo();
};

document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('btnAbrirLista');
    const btnFechar = document.getElementById('btnFecharLista');
    const painel = document.getElementById('painelLateral');
    const container = document.getElementById('listaContainer');
    const input = document.getElementById('inputBusca');

    if (input) input.addEventListener('keypress', (e) => { if (e.key === 'Enter') window.verificarPlataforma(); });

    if (btnAbrir && painel && container) {
        btnAbrir.addEventListener('click', () => {
            painel.style.right = "0px";
            container.innerHTML = "";
            const db = window.BETS_DATABASE;
            if (!db || !db.listaMestreOficial) return;
            db.listaMestreOficial.forEach(p => {
                const item = document.createElement('div');
                item.className = 'item-lista-bet';
                item.style.background = "#242424"; item.style.padding = "12px"; item.style.marginBottom = "12px"; item.style.borderRadius = "6px"; item.style.borderLeft = "4px solid #00ff88";
                item.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;"><h4 style="margin:0;color:#fff;font-size:14px;">${p.nome}</h4><span style="font-size:10px;color:#666;">CNPJ: ${p.cnpj.substring(0,10)}...</span></div><p style="font-size:11px;color:#b3b3b3;margin:4px 0 8px 0;line-height:1.4;">${p.alerta}</p><a href="${p.linkAfiliado}" target="_blank" rel="noopener noreferrer" style="color:#00ff88;font-size:12px;text-decoration:none;font-weight:bold;">Acessar →</a>`;
                container.appendChild(item);
            });
        });
    }
    if (btnFechar && painel) btnFechar.addEventListener('click', () => { painel.style.right = "-400px"; });
});
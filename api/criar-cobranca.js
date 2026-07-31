// api/criar-cobranca.js (Versão com cadastro automático de cliente)
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { valor, nomePlano } = req.body;
   
    // SUA CHAVE DO ASAAS
    const ASAAS_KEY = '$aact_prod_000MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjdkZmY2YjgwLTk4ZDUtNGMyMy04M2I5LWFlZTE4YjlmOWVmMjo6JGFhY2hfMTJhN2VkYjMtNWIxYS00YmVkLWIwZDctNDBkYzZmNWExMjcw';

    try {
        // PASSO 1: O CÓDIGO CRIA O CLIENTE AUTOMATICAMENTE NO SEU ASAAS
        const responseCliente = await fetch('https://asaas.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access_token': ASAAS_KEY
            },
            body: JSON.stringify({
                name: "Usuário Verifica Plus",
                email: "cliente.plus@verificabet.com" // Dados genéricos padrão
            })
        });

        const dadosCliente = await responseCliente.json();
       
        // Pega o ID do cliente que acabou de ser criado na hora
        const idClienteNovo = dadosCliente.id;

        if (!idClienteNovo) {
            return res.status(400).json({ error: 'Erro ao criar cliente automático no Asaas' });
        }

        // PASSO 2: CRIA A COBRANÇA PIX USANDO O CLIENTE NOVO
        const responseCobranca = await fetch('https://asaas.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access_token': ASAAS_KEY
            },
            body: JSON.stringify({
                customer: idClienteNovo, // Usa o cliente que o robô criou acima
                billingType: 'PIX',
                value: valor,
                dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Expira em 24h
                description: `Ativação Módulo ${nomePlano} - Verifica Bet`
            })
        });

        const dadosCobranca = await responseCobranca.json();

        if (!responseCobranca.ok) {
            return res.status(400).json({ error: dadosCobranca.errors });
        }

        // PASSO 3: BUSCA O QR CODE DO PIX
        const responsePix = await fetch(`https://asaas.com/${dadosCobranca.id}/pixQrCode`, {
            method: 'GET',
            headers: { 'access_token': ASAAS_KEY }
        });

        const dadosPix = await responsePix.json();

        // Devolve o QR Code perfeitamente pronto para a tela do usuário
        return res.status(200).json({
            idCobranca: dadosCobranca.id,
            payload: dadosPix.payload,
            encodedImage: dadosPix.encodedImage
        });

    } catch (error) {
        return res.status(500).json({ error: 'Erro interno ao conectar com o Asaas' });
    }
}

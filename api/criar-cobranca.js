// Este arquivo roda escondido no servidor da Vercel e ninguém consegue ver o código dele pelo navegador
export default async function handler(req, res) {
    // Configurações de segurança para o seu site funcionar
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
   
    // ESTA É A SUA CHAVE DO ASAAS PROTEGIDA QUE VOCÊ PASSOU
    const ASAAS_KEY = '$aact_prod_000MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OmRhNTUxZDU3LTNmMmQtNDk3MS05NDZkLTI2MDkwOWY5YzI3Zjo6JGFhY2hfN2U2MzFmMDItMGQ5NS00NWQwLTk4ZDgtMDg0ZmVjOGJiMzA3';
    const ASAAS_URL = 'https://asaas.com';

    try {
        // 1. Cria a cobrança no sistema do Asaas
        const responseCobranca = await fetch(ASAAS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access_token': ASAAS_KEY
            },
            body: JSON.stringify({
                customer: 'cus_000006240212', // Cliente padrão do seu sistema
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

        // 2. Busca o QR Code e o código Copia e Cola desse Pix gerado
        const responsePix = await fetch(`https://asaas.com/${dadosCobranca.id}/pixQrCode`, {
            method: 'GET',
            headers: { 'access_token': ASAAS_KEY }
        });

        const dadosPix = await responsePix.json();

        // Devolve os dados do Pix mascarados para o seu site usar com segurança
        return res.status(200).json({
            idCobranca: dadosCobranca.id,
            payload: dadosPix.payload,
            encodedImage: dadosPix.encodedImage
        });

    } catch (error) {
        return res.status(500).json({ error: 'Erro interno ao conectar com o Asaas' });
    }
}

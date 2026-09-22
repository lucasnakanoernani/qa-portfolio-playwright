import { APIRequestContext } from '@playwright/test';

export async function gerarCartao(request: APIRequestContext) {
  const response = await request.post('https://www.4devs.com.br/ferramentas_online.php', {
    form: {
      acao: 'gerar_cc',
      pontuacao: 'S',
      bandeira: 'master'
    }
  });

  const html = await response.text();

  // número
  const numero = html.match(/id="cartao_numero"[\s\S]*?>(.*?)</)?.[1]?.trim();

  if (!numero) {
    console.log('HTML recebido:', html);
    throw new Error('Erro ao capturar numero');
  }

  // validade
  const validadeMatch = html.match(/id="data_validade"[\s\S]*?>(.*?)</);
  const validadeCompleta = validadeMatch?.[1]?.trim();

  if (!validadeCompleta) {
    console.log('HTML recebido:', html);
    throw new Error('Erro ao capturar validade');
  }

  // tratamento
  const partes = validadeCompleta.split('/');
  const data = `${partes[1]}/${partes[2]}`;

  // cvv
  const cvv = html.match(/id="codigo_seguranca"[\s\S]*?>(.*?)</)?.[1]?.trim();
  if (!cvv) {
    console.log('HTML recebido:', html);
    throw new Error('Erro ao capturar cvv');
  }

  return {
    numero,
    data,
    cvv,
    nome: 'Lucas Teste'
  };
}
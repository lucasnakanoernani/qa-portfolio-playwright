import { APIRequestContext } from '@playwright/test';

export async function gerarPessoa(request: APIRequestContext) {
  const response = await request.post('https://www.4devs.com.br/ferramentas_online.php', {
    form: {
      acao: 'gerar_pessoa',
      sexo: 'I',
      idade: 'S',
      txt_qtde: '1'
    }
  });

  const data = await response.json();

  // pega o primeiro item do array
  const pessoa = data[0];

  // separa nome e sobrenome
  const nomeCompleto = pessoa.nome.split(' ');

  function formatarData(data: string) {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
  }

  return {
    nome: nomeCompleto[0],
    sobrenome: nomeCompleto.slice(1).join(' '),
    email: pessoa.email,
    CPF: pessoa.cpf,
    RG: pessoa.rg,
    sexo: pessoa.sexo,
    celular: pessoa.celular,
    dataNascimento: formatarData(pessoa.data_nasc),
    CEP: pessoa.cep,
    numero: String(pessoa.numero),
    endereco: pessoa.endereco
  };
}
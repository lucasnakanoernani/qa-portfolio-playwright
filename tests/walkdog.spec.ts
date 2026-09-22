import { test, expect } from '@playwright/test';
import { gerarPessoa } from '../utils/api/dados_pessoa.api';
import { CadastroWalkdogPage } from '../pages/walkdog.page';

test.describe('Cadastro na Walkdog', () => {

  test('deve realizar checkout com sucesso', async ({ page, request }) => {
    const cadastro = new CadastroWalkdogPage(page);

    // API
    const dados = await gerarPessoa(request);

    // acessa página
    await cadastro.acessar();

    // preenche formulário
    await cadastro.preencherCadastroWalkdog({
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      email: dados.email,
      CPF: dados.CPF,
      CEP: dados.CEP,
      numero: dados.numero
    });

    // anexar arquivo
    await cadastro.anexarDocumento()

    // envia
    await cadastro.enviar();

    // cadastro realizado
    await expect(page.getByText('Obrigado!',{exact:true})).toBeVisible();

});
});
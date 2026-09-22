import { test, expect } from '@playwright/test';
import { gerarPessoa } from '../utils/api/dados_pessoa.api';
import { FormDemoPage } from '../pages/demoqa.page';

test.describe('Pratice Form Demo QA', () => {

  test('deve realizar checkout com sucesso', async ({ page, request }) => {
    const form = new FormDemoPage(page);

    // API
    const dados = await gerarPessoa(request);

    // acessa página
    await form.acessar();

    // preenche checkout
    await form.preencherFormDemo({
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      email: dados.email,
      CPF: dados.CPF,
      numero: dados.numero,
      sexo: dados.sexo,
      dataNascimento: dados.dataNascimento,
      celular: dados.celular,
      endereco: dados.endereco
    });

    // anexar arquivo
    await form.anexarDocumento()

    // envia
    await form.enviar();

    // cadastro realizado
    await expect(page.getByText('Thanks for submitting the form',{exact:true})).toBeVisible();
  });

});
import { Page } from '@playwright/test';

export class CadastroWalkdogPage {
  constructor(private page: Page) {}

  async acessar() {
    await this.page.goto('https://walkdog.vercel.app/signup');
  }

  async preencherCadastroWalkdog(dados: { 
    nome: string;
    sobrenome: string;
    email: string;
    CPF: string;
    CEP: string;
    numero: string
    }) {
    //Cadastro
    //Dados
    await this.page.getByRole('textbox', { name: 'Nome completo' }).fill(`${dados.nome} ${dados.sobrenome}`);
    await this.page.getByRole('textbox', { name: 'E-mail' }).fill(dados.email);
    await this.page.getByRole('textbox', { name: 'CPF somente números' }).fill(dados.CPF);

    //Endereço
    await this.page.getByRole('textbox', { name: 'CEP' }).fill(dados.CEP);
    await this.page.getByRole('button', { name: 'Buscar CEP' }).click();
    await this.page.getByRole('textbox', { name: 'Complemento' }).fill('Teste');
    await this.page.getByRole('spinbutton', { name: 'Número' }).fill(dados.numero);

    //Atividades extras
    await this.page.getByRole('listitem').filter({ hasText: 'Cuidar' }).click();
    await this.page.getByRole('listitem').filter({ hasText: 'Adestrar' }).click();
  }

  async anexarDocumento() {
    await this.page.locator('input[type="file"]').setInputFiles('utils/documents/documento-teste.png');
  }

  async enviar() {
        await this.page.getByRole('button', { name: 'Cadastrar' }).click();
  }
}
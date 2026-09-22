import { Page } from '@playwright/test';

export class FormDemoPage {
  constructor(private page: Page) {}

  async acessar() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async preencherFormDemo(dados: { 
    nome: string;
    sobrenome: string;
    email: string;
    CPF: string;
    sexo: string;
    dataNascimento: string;
    celular: string;
    numero: string;
    endereco: string;
    }) {
    //Pratice Form
    //Student Registration Form
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(dados.nome);
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(dados.sobrenome);
    await this.page.getByRole('textbox', { name: 'name@example.com' }).fill(dados.email);
    await this.page.getByRole('radio', { name: 'Other' }).check();
    await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill(dados.celular);
    await this.page.locator('#dateOfBirthInput').fill(dados.dataNascimento);
    await this.page.locator('#subjectsInput').fill('Teste');
    await this.page.getByRole('checkbox', { name: 'Sports' }).check();
    await this.page.getByRole('checkbox', { name: 'Reading' }).check();
    await this.page.getByRole('checkbox', { name: 'Music' }).check();
    await this.page.locator('#subjectsInput').fill('Teste');
    await this.page.getByRole('textbox', { name: 'Current Address' }).fill(dados.endereco);
    await this.page.locator('#state').click();
    await this.page.getByRole('option', { name: 'Uttar Pradesh' }).click();
    await this.page.locator('#react-select-4-input').click();
    await this.page.getByRole('option', { name: 'Lucknow' }).click();
  }

  async anexarDocumento() {
    await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('utils/documents/documento-teste.png');  
  }

  async enviar() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}
import * as crypto from 'crypto';
import { Conta } from './contaModel';
import { Gerente } from './gerenteModel';

export class Cliente {
  private id: string;
  public nomeCompleto: string;
  private endereco: { rua: string, numero: string, bairro: string, cidade: string, cep: string, estado: string };
  private telefone: string;
  public contasAssociadas: Conta[] = [];
  private gerente: Gerente;
  public rendaSalarial: number;

  constructor(nomeCompleto: string, endereco: { rua: string, numero: string, bairro: string, cidade: string, cep: string, estado: string }, telefone: string, gerente: Gerente, contasAssociadas: Conta[] = [], rendaSalarial: number) {
    this.nomeCompleto = nomeCompleto;
    this.id = crypto.randomUUID();
    this.endereco = endereco;
    this.telefone = telefone;
    this.gerente = gerente;
    this.contasAssociadas = contasAssociadas;
    this.rendaSalarial = rendaSalarial;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }
}
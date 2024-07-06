import * as crypto from 'crypto';
import { Cliente } from './clienteModel';
import { Conta } from './contaModel';
import { ContaCorrente } from './contaCorrenteModel';
import { ContaPoupanca } from './contaPoupancaModel';

export class Gerente {
  public nomeCompleto: string;
  private id: string;
  public clientes: Cliente[] = [];

  constructor(nomeCompleto: string) {
    this.nomeCompleto = nomeCompleto;
    this.id = crypto.randomUUID();
  }

  getId(): string {
    return this.id;
  }

}
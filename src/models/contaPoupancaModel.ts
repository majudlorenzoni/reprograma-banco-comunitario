import { Conta } from './contaModel';
import { Cliente } from './clienteModel';

export class ContaPoupanca extends Conta {
  constructor(cliente: Cliente, agencia: string, numero: string, saldo: number, tipoConta: string, taxaJuros: number) {
    super(cliente, agencia, numero, saldo, tipoConta, undefined, taxaJuros);
  }
}

import * as crypto from 'crypto';
import { Cliente } from '../models/clienteModel';
import { Conta } from '../models/contaModel';
import { Gerente } from '../models/gerenteModel';
import { ContaService } from './contaService';

export class GerenteService {
  private gerentes: Gerente[] = [];
  private contaService: ContaService = new ContaService();

  adicionarGerente(nomeCompleto: string): Gerente {
    const novoGerente = new Gerente(nomeCompleto);
    this.gerentes.push(novoGerente);
    return novoGerente;
  }

  encontrarGerentePorId(id: string): Gerente | undefined {
    return this.gerentes.find(gerente => gerente.getId() === id);
  }

  adicionarCliente(gerente: Gerente, cliente: Cliente): void {
    gerente.clientes.push(cliente);
    console.log(`Cliente ${cliente.getId()} adicionado ao gerente ${gerente.nomeCompleto}.`);
  }

  removerCliente(gerente: Gerente, idCliente: string): void {
    const index = gerente.clientes.findIndex(cliente => cliente.getId() === idCliente);
    if (index !== -1) {
      gerente.clientes.splice(index, 1);
      console.log(`Cliente ${idCliente} removido do gerente ${gerente.nomeCompleto}.`);
    } else {
      console.log(`Cliente ${idCliente} não encontrado no gerente ${gerente.nomeCompleto}.`);
    }
  }

  abrirConta(gerente: Gerente, cliente: Cliente, tipoConta: string): void {
    this.contaService.abrirConta(cliente, tipoConta);
  }

  fecharConta(gerente: Gerente, cliente: Cliente, numeroConta: string): void {
    this.contaService.fecharConta(cliente, numeroConta);
  }

  mudarTipoConta(gerente: Gerente, cliente: Cliente, numeroConta: string, novoTipo: string): void {
    this.contaService.mudarTipoConta(cliente, numeroConta, novoTipo);
  }
}

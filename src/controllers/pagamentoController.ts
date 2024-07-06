import { Request, Response } from 'express';
import { PagamentoService } from '../services/pagamentoService';
import { Cliente } from '../models/clienteModel';
import { Gerente } from '../models/gerenteModel';

const pagamentoService = new PagamentoService();

export class PagamentoController {
  static async realizarPagamento(req: Request, res: Response): Promise<Response> {
    const { clienteId, valor, tipoPagamento } = req.body;

    // Supondo que há uma maneira de obter o cliente pelo ID, como um serviço de cliente
    const cliente = getClientById(clienteId); // Função fictícia, substitua pela real

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    const pagamentoRealizado = pagamentoService.realizarPagamento(cliente, valor, tipoPagamento);

    if (pagamentoRealizado) {
      return res.status(200).json({ message: 'Pagamento realizado com sucesso' });
    } else {
      return res.status(400).json({ message: 'Saldo insuficiente' });
    }
  }
}

function getClientById(id: string): Cliente | null {
  // Lógica para buscar o cliente pelo ID
  // Substitua pelo método real de busca do cliente
  return null;
}
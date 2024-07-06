import express, { Request, Response } from 'express';
import { Cliente } from '../models/clienteModel';
import { ClienteService } from '../services/clienteService';

const router = express.Router();
const clienteService = new ClienteService();

// Rota para listar todos os clientes
router.get('/api/clientes', (req: Request, res: Response) => {
  const clientes = clienteService.listarClientes();
  res.status(200).json(clientes);
});

// Rota para buscar cliente por ID
router.get('/api/clientes/:id', (req: Request, res: Response) => {
  const clienteId = req.params.id;
  const cliente = clienteService.buscarCliente(clienteId);
  if (cliente) {
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ message: `Cliente com ID ${clienteId} não encontrado.` });
  }
});

// Rota para criar um novo cliente
router.post('/api/clientes', (req: Request, res: Response) => {
  const { nomeCompleto, endereco, telefone, rendaSalarial, gerenteId } = req.body;
  const novoCliente = new Cliente(nomeCompleto, endereco, telefone, gerenteId, [], rendaSalarial);
  const clienteCriado = clienteService.criarCliente(novoCliente);
  res.status(201).json(clienteCriado);
});

// Rota para atualizar informações de um cliente
router.put('/api/clientes/:id', (req: Request, res: Response) => {
  const clienteId = req.params.id;
  const { nomeCompleto, endereco, telefone, rendaSalarial, gerenteId } = req.body;
  const clienteAtualizado = new Cliente(nomeCompleto, endereco, telefone, gerenteId, [], rendaSalarial);
  const cliente = clienteService.atualizarCliente(clienteId, clienteAtualizado);
  if (cliente) {
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ message: `Cliente com ID ${clienteId} não encontrado.` });
  }
});

// Rota para remover um cliente
router.delete('/api/clientes/:id', (req: Request, res: Response) => {
  const clienteId = req.params.id;
  const clienteRemovido = clienteService.removerCliente(clienteId);
  if (clienteRemovido) {
    res.status(200).json({ message: `Cliente com ID ${clienteId} removido.` });
  } else {
    res.status(404).json({ message: `Cliente com ID ${clienteId} não encontrado.` });
  }
});

export default router;

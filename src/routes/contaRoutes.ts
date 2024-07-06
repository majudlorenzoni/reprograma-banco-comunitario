import express, { Request, Response } from 'express';
import { Cliente } from '../models/clienteModel';
import { Conta } from '../models/contaModel';
import { ContaCorrente } from '../models/contaCorrenteModel';
import { ContaPoupanca } from '../models/contaPoupancaModel';
import { ClienteService } from '../services/clienteService';


const router = express.Router();
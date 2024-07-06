import { Cliente } from './clienteModel';

export class Conta {
  constructor(
    public cliente: Cliente,
    public agencia: string,
    public numero: string,
    public saldo: number,
    public tipoConta: string,
    public limite?: number,
    public taxaJuros?: number
  ) {}

  getSaldo(): number {
    return this.saldo;
  }

  getLimite(): number | undefined {
    return this.limite;
  }
  
  debitar(valor: number): boolean {
    if (this.saldoSuficiente(valor)) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  private saldoSuficiente(valor: number): boolean {
    if (this.saldo >= valor) {
      return true;
    }
    // Verificar se a conta é Conta Corrente e se há limite de cheque especial
    if (this.tipoConta === 'Conta Corrente' && this.limite !== undefined) {
      const saldoMaisChequeEspecial = this.saldo + this.limite;
      if (saldoMaisChequeEspecial >= valor) {
        // Se o saldo mais o cheque especial forem suficientes
        // Deduz apenas do saldo, se possível
        const saldoNecessario = valor - this.saldo;
        this.saldo = 0; // Zera o saldo
        this.limite -= saldoNecessario; // Deduz do limite
        return true;
      }
    }
    return false;
  }
}


export class Conta{
    
    //ATRIBUTOS
    private numeroConta: number;
    private nomeTitular: string;
    private saldo: number;

    //CONSTRUTOR
    public constructor(_numeroConta: number, _nomeTitular:string, _saldo: number) {
        this.numeroConta = _numeroConta;
        this.nomeTitular = _nomeTitular;
        this.saldo = _saldo;
    } 

    //MÉTODOS GET E SET
    public getNumeroConta(): number {
        return this.numeroConta;
    }

    public setNumeroConta(_numeroConta: number): void {
        this.numeroConta = _numeroConta;
    }

    public getNomeTitular(): string {
        return this.nomeTitular;
    }

    public setNomeTitular(_nomeTitular: string): void {
        this.nomeTitular = _nomeTitular;
    }
    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(_saldo: number): void {
        this.saldo = _saldo;
    }


    //MÉTODOS DIAGRAMA
    public obterSaldo():number {
        return this.saldo;
    }

    public saque(valorSacado: number):number {
        return this.saldo = this.saldo - valorSacado;
    }

    public deposito(valorDepositado: number):void {
        this.saldo = this.saldo + valorDepositado;
        console.log(this.saldo);
    }
}
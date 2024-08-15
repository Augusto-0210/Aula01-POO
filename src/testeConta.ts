//Importar a classe que quer utilizar
import { Conta } from './Conta';

//Instanciar (criar objeto)
const conta1: Conta = new Conta(1,'Felisberto', 120);
const conta2: Conta = new Conta(2,'Maria', 100);
const conta3: Conta = new Conta(3,'João', 150);

console.log(conta1.obterSaldo());
console.log(conta2.saque(70));
console.log(conta3.deposito(100));
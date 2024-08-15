//Importar a classe que quer utilizar
import { Pessoa } from './Pessoa';

//Instanciar (criar objeto)
const pessoa1: Pessoa = new Pessoa('Felisberto', 25);
const pessoa2: Pessoa = new Pessoa('Maria', 21);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());

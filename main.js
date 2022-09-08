// Nullish Coalescing Operator

const idade = 0;

// 0, '', [], false, undefined, null => valores 'falsy' para o js
// então, em alguns casos como na idade, não devemos usar o operador ou (||)
document.querySelector('#or').innerText = 'Sua idade é: ' + (idade || 'Não informado');
// como mostrado na linha acima, porque caso a idade seja 0, ele mostra o 'Não informado'

// nesses casos, devemos usar o Nullish Coalescing Operator, porque ele é bem mais restrito
// , irá apenas detetar valores que realmente não são válidos como null, undefined, NaN
document.querySelector('#nullish').innerText = 'Sua idade é: ' + (idade ?? 'Não informado');

// -----------------------------------------------------------------------------------------

// Objetos

const user = {
  name: 'John Doe',
  age: 18,
  address: {
    street: 'NYC',
    number: 1
  }
};

// IN operator, é usado para checar se existe uma chave num objeto, no caso
// existe 'name' no objeto user, caso troque name para algo que não existe, dará false
document.querySelector('#in').innerText = ('name' in user);

// Object.keys é usado para obter um vetor com todas as chaves do nosso objeto
document.querySelector('#keys').innerText = Object.keys(user);

// Object.values é usado para obter um vetor com todos os valores do nosso objeto
document.querySelector('#values').innerText = Object.values(user);

// Como vimos no Object.values ele retorna "[object Object]"quando temos um objeto
// dentro de outro objeto, nesse caso, uma boa prática é converter para JSON com
// JSON.stringify 
document.querySelector('#stringify').innerText = JSON.stringify(Object.values(user));

// Object.entries é usado para obter um vetor com todas as chaves e valores do nosso objeto
// no caso, ele vai ter 2 posiçoes em cada vetor, uma para chave e outra para valor, exemplo:
// [["name","John Doe"],["age",18],["address",{"street":"NYC","number":1}]]
document.querySelector('#entries').innerText = JSON.stringify(Object.entries(user));

// Desestruturação de objetos (obter apenas algumas partes de um objeto)
// a forma mais comum seria:
// const address = user.address; 

// mas como fariamos isso de maneira mais simples e com a possibilidade de pegar vários valores?
// usamos a desestruturação:
const { name, address } = user;
document.querySelector('#desestruturacao').innerText = JSON.stringify({ name, address });

// e tambem tem como mudarmos o nome das variaveis na desestruturação, como? simples!
const { name: nome, address: endereço } = user;
document.querySelector('#desestruturacao').innerText = JSON.stringify({ nome, endereço });

// não acaba por aqui, também conseguimos definir um 'default value', caso um valor não exista
// caso ele exista, irá mostrar o valor original
const { name: namee = 'Rodrigo', nickname = 'rodrigofplourenco' } = user;
document.querySelector('#desestruturacao-default').innerText = JSON.stringify({ namee, nickname });

// a desestruturação pode ser usada em qualquer lugar que trabalhe com objetos, até mesmo funçoes!
// function mostrarIdade(user) { return user.age } ficaria:
function mostrarIdade({ age }) { 
  return age;
}
document.querySelector('#desestruturacao-funcoes').innerText = mostrarIdade(user);

// -----------------------------------------------------------------------------------------

// REST Operator

// o REST operator (...) é usado para pegar o resto que falta que não foi pego na desestruturaçao
// exemplo, vou pegar o name do user e quero pegar tudo o resto e colocar na variavel "resto"
const { name: name3, age, ...resto } = user;

document.querySelector('#rest').innerText = JSON.stringify(resto);

// e caso eu queira trabalhar com desestruturação com arrays, funciona exatamente da mesma forma
// excepto que tem que usar [] em vez de {}, exemplo:
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [num1, num2] = array;

document.querySelector('#array-desestruturacao').innerText = JSON.stringify({ num1, num2 });

// e consecutivamente, conseguimos usar o REST da mesma forma!
const [num01, num02, ...rest] = array;
document.querySelector('#array-desestruturacao-rest').innerText = rest;

// e caso eu queira pegar apenas o index 2 e 4 e ignorar o 0 e 1, é possivel com desestruturacao?
// claro!
const [, , num3, , num5, ...restoo] = array; // Como vê, so deixar vazio e colocar mais uma ,
document.querySelector('#array-desestruturacao-pulando').innerText = JSON.stringify({ num3, num5, restoo });

// -----------------------------------------------------------------------------------------

// Short Syntax Object

const nick = "rodrigofplourenco";
const money = 1000;

// suponha que quer criar um objeto com os valores acima, qual seria a maneira mais usada?
const jogador = {
  nick: nick,
  money: money
}
document.querySelector('#short').innerText = JSON.stringify(jogador);

// nestes casos podemos usar a short syntax já que o nome da chave será igual ao nome da variável, que ficaria:
const player = {
  nick,
  money
}
document.querySelector('#short').innerText = JSON.stringify(player);


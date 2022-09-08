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
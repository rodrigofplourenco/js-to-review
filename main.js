// Nullish Coalescing Operator

const idade = 0;

// 0, '', [], false, undefined, null => valores 'falsy' para o js
// então, em alguns casos como na idade, não devemos usar o operador ou (||)
document.querySelector('#or').innerText = 'Sua idade é: ' + (idade || 'Não informado');
// como mostrado na linha acima, porque caso a idade seja 0, ele mostra o 'Não informado'

// nesses casos, devemos usar o Nullish Coalescing Operator, porque ele é bem mais restrito
// , irá apenas detetar valores que realmente não são válidos como null, undefined, NaN
document.querySelector('#nullish').innerText = 'Sua idade é: ' + (idade ?? 'Não informado');


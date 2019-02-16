const LinkedList = require('./linkedlist/linkedlist');

const lista = new LinkedList();

//for(let i = 0; i < 10000; i++) {
//    lista.add(`teste-${i+1}`);
//}

lista.add('t');
lista.add('t2');
lista.add('t3');
lista.add('t4');

try {
    console.log(lista.getById(4));
}
catch(err) {
    console.log(err);
}

console.log(lista.size());

//
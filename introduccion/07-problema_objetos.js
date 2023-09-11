var acount = {
    pin: 1234,
    amount: ()=>{
        return deposits
    },
    owner: 'Patricio Estrella',
    deposits: [],
    widthdraw: [],
};

console.log(acount);

//Hacer depositos
acount.deposits.push(100);
acount.deposits.push(400);
acount.deposits.push(1000);
acount.deposits.push(100);

//Hacer retiros
acount.deposits.push(-300);
acoount.deposits.push(-1000);

//Conocer el saldo de mi amigo
var copiaDepositos = acount.deposits.map(money => money);

var total = copiaDepositos.map((money) => money);

var total = copiaDepositos.reduce((suma, money) => suma + money);

console.log(`Saldo de tu amigo: $${total} MX`)
const person = {name:'jack william', age: 17, job:'facebook', gfName:'Ema Watson', address:'Kochu khet', phone:'01717112211', friends:['Tom hanks', 'tom cruise', 'Tom yarn'] };

const { phone } = person;

const complexObject = {
    name:'abc',
    info:{
        address:'Kola bagan', 
        leader: 'Tiger Leader'
    }

}

const {leader} = complexObject.info;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Shakib Khan', 'Arman khan', 'Aamir khan', 'Salman khan', 'sharuk khan'];
const [chotoFriend,  ...olderF] = friends;
console.log(olderF)
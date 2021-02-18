//alert('Hello World');
let score;
score = 100;

//varialbles

let sex;
sex = 'male';
const name = 'saikat';
const age = 30;
//console.log('My name is ' + name + ' and i am ' + age + ' and i am a ' + sex);
const hello = `My name is ${name} and i am ${age} and i am a ${sex}`;
//console.log(hello);

//Strings

const s = 'HellO WorlD';
/*console.log(s.length);
console.log (s.substring(0, 5).toLowerCase());*/
const t = 'technology, computer, it, software';
//console.log(t.split(', '));

//Arrays - multiple values of different kinds 

const  number = new Array(1, 2, 3, 4, 5);
//console.log(number);
const fruits = ['apples', 'grapes', 'oranges', 10, 2.3];
fruits[fruits.length]='pears';
fruits.push(50);
fruits.pop();
fruits.unshift('dates');
/*console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));*/

//Object literals

const person = {
    firstname:'saikat',
    lastname:'saha',
    age:24,
    hobbies: ['footbal', 'tt', 'movies'],
    address: {
        street:'vpg avenue 4th extend street',
        city:'chennai',
        state:'tamilnadu'
    }
}
//console.log(person.firstname, person.lastname, person.address.city, person.hobbies[0]);

const {firstname,lastname,address:{city}} = person; //destructuring
//console.log(firstname, lastname, city);
person.email = 'saikat.saha@gmail.com';
/*console.log(person.email);  //adding properties
console.log(person);*/

//Array of objects

const todos = [
    
    {
        id:1,
        task:'Take out the trash',
        isCompleted:true,
    },
    
    {
        id:2,
        task:'Meeting with Boss',
        isCompleted:true,
    },
    
    {
        id:3,
        task:'Dinner',
        isCompleted:false,
    }
]

//const {firsttask, secondtask, thirdtask} = todos;
//console.log(todos[2].task);

//Converting to JSON

const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

for(let i =0; i<todos.length; i++){
    
    //console.log(todos[i].isCompleted);
}

//structured for loops
for(let todo of todos)   {
    
    //console.log(todo.isCompleted);
}

//foreach, map, filter

todoid = todos.forEach(function(todo)
{
    //console.log(todo.id);
});


const todotask = todos.map(function(todo)
{
    return todo.task;
});

//console.log(todotask);

//finctional programming

const todocompletedtask = todos.filter(function(todo)
{
    return todo.isCompleted===true;
}).map(function(todo)
{
    return todo.task;
});

//console.log(todocompletedtask);

//conditional statements

const x=10;
const colour = x>9?'red':'blue'; //use ternary operator '?'

//console.log(colour)

//Functions

function adnumber(num1, num2){
    return num1+num2;
}
//console.log(adnumber(3,3));

const addnumber  = (num1, num2) => num1+num2; //for single line functions
//console.log(addnumber(5,3));

//todos.forEach((todo) => console.log(todo));
const todoTask = todos.map((todo) => todo.task);
//console.log(todoTask);
const todotaSk = todos.filter((todo)=>todo.isCompleted===true).map((todo) => todo.task);
//console.log(todotaSk);

//Object Oriented Programing
//Constructor function

/*function Person(firstname, lastName, dob){
    this.firstname = firstname;
    this.lastName = lastName;
    this.dob = new Date(dob);
    /*this.getBirthyear = function(){
        return this.dob.getFullYear();
    }
    this.getFullname = function(){
        return `${this.firstname} ${this.lastName}`;
    }
}
Person.prototype.getBirthyear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullname = function(){
    return `${this.firstname} ${this.lastName}`;
}*/

//Class - doing the previous operation in a better way

class Person{
    constructor(firstname, lastName, dob){
        this.firstname = firstname;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthyear(){
        return this.dob.getFullYear();
    }

    getFullname(){
        return `${this.firstname} ${this.lastName}`;
    }
}

//instatiate object

const person1 = new Person('Saikat', 'Saha', '10-24-1995');
console.log(person1);
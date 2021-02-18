//single selector 
const getelement = document.getElementById('main-form');
const getquery = document.querySelector('.container');

//multiple selector
/*const getelements = document.getElementsByTagName('li'); //can't use array methods
const getqueries = document.querySelectorAll('.my-list');
//console.log(getqueries);

const items = document.querySelectorAll('.my-list');
//items.forEach((list)=>console.log(list));
const ul = document.querySelector('.my-list');

//changing things in the dom
//ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent='HELLO';
ul.lastElementChild.textContent='goodbye';
ul.children[1].innerText = 'SAHA';
ul.children[2].innerHTML = '<h1>SAIKAT</h1>';*/

//styling from js

const dbtn = document.querySelector('.dbtn')
 

//creating events 
dbtn.addEventListener('click', (e)=>{
    e.preventDefault(); //to prevent the default offset 
    dbtn.style.background = 'grey';
    dbtn.style.color = 'white';
    document.querySelector('body').classList.add('bg-dark-mode');
    document.querySelector('#main-form').style.background='grey';
    document.querySelector('h1').classList.add('header');
    document.querySelector('li').style.background = 'grey';
    document.querySelector('li').style.color = 'white';
    console.log(e.target.id);  
});

const nbtn = document.querySelector('.nbtn');
nbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('body').classList.remove('bg-dark-mode');
    document.querySelector('#main-form').style.background='turquoise';
    document.querySelector('h1').classList.remove('header');
    document.querySelector('li').style.background = 'turquoise';
    document.querySelector('li').style.color = 'black';
    nbtn.style.background = 'turquoise';
    nbtn.style.color = 'grey';
});

//putting form characteristics

const myForm = document.querySelector('#main-form');
const firstName= document.querySelector('#fName');
const lastName = document.querySelector('#lName');
const errmsg = document.querySelector('.msg');
const email = document.querySelector('#email');
const list = document.querySelector('#List');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(firstName.value===''||lastName.value===''||email.value===''){
        errmsg.innerHTML = 'Please enter all details';
        errmsg.classList.add('msg');
        setTimeout(() => errmsg.remove(), 3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${firstName.value} ${lastName.value} : ${email.value}`));
        list.appendChild(li);
        
        //clear fields

        firstName.value = '';
        lastName.value = '';
        email.value = '';
    }   
}


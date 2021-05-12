const personLst = [
    {
        name: 'Adam adam',
        age: 22,
        email: 'adam@example.com'
    },
    {
        name: 'eve perkins',
        age: 18,
        email: 'eve@example.com'
    },
    {
        name: 'melvin wood',
        age: 20,
        email: 'melvin@example.com'
    },
    {
        name: 'signe lorenzo',
        age: 19,
        email: 'signe@example.com'
    },
    {
        name: 'william rasmussen',
        age: 25,
        email: 'william@example.com'
    }]

const age = 20;

function getPersonAboveAge(array, age) {
    const personAboveAge = [];
    for (let person of array) {
        if (person.age >= age) {
            personAboveAge.push(person);
        }
    }
    return personAboveAge;
}

function printArray(array) {
    for (let i = 0; i < array.lenght; i++) {
        console.log('{array[i].name} (${array[i].age}) ${array[i].email}')
    }
}

function init() {
    printArray(personLst);
}

const personAboveAge = getPersonAboveAge(personLst, age);
printArray(personAboveAge);



function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function addHobbies() {
    const inputList = document.querySelectorAll('.hobbiesInput');

    if (inputList.length < 5) {
        const hobbiesList = document.getElementById('.hobbiesList');
        const newLineElement = createNode('br');
        inputElement = createNode('input');
        inputElement.setAttribute("class", "hobbiesInput");

        append(hobbiesList, newLineElement);
        append(hobbiesList, inputElement);
    }
    else {
        document.getElementById('newHobbyBtn').removeEventListener('click', addHobbies);
    }
}


document.addEventListener('DOMContentLoaded', function (event) {});

document.getElementById('newHobbyBtn').addEventListener('click', addHobbies);
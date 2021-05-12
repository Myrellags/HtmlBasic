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


// JavaScript code to modify the items in VenueList
const list = document.getElementById("VenueList");
// Create a new venue
const newItem = document.createElement("li");
newItem.textContent = "Room C";
// Add the new venue to the end of VenueList
list.appendChild(newItem);

//The DOM also defines methods for removing nodes from the document tree, including:
//removeChild(node), which removes the target node.
document.removeChild(document.getElementById("VenueList").firstChild);
//removeAttribute(attributeName), which removes the named attribute from the element node.
const list = document.getElementById("VenueList");
list.removeAttribute("id");
//removeAttributeNode(node), which removes the given attribute node from the element.
const list = document.getElementById("VenueList");
list.removeAttribute(list.attributes[0]);

//You can also set the event handler as a property of the image displaying the help icon in the DOM, like this:
//This method only allows you set one listener on an event
document.images.helpIcon.onmouseover = function () { window.alert('Some help text'); };

//If you want multiple event listeners from elements in an HTML document you can use the following methods

//addEventListener(eventName, listenerFunction, UseCapture), which adds the listener function to the
//element for the given eventName. You can pass the listenerFunction by  name or an anonymous funtion
let helpIcon = document.getElementById("helpIcon");
//Add an event listener for the mouseover event by using a named function
function showHelpText() {
    window.alert('Some help text');
}
helpIcon.addEventListener("mouseover", showHelpText, false);
//Alternatively, using an anonymous function
helpIcon.addEventListener("mouseover", function () { window.alert('Some help text'); }, false);
//removeEventListener(event, listenerFunction, useCapture), which removes the listener function
//from the element for the given eventname.
helpIcon.removeEventListener("mouseover", ShowHelpText, false);
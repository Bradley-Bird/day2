// import functions
import { people } from './data.js';
console.log(people, 'people');
// grab DOM elements
const selectEl = document.getElementById('name');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const favoriteAnimalsEl = document.querySelector('.favoriteAnimals')
const hobbyTEl = document.querySelector('.hobbyTitle');
const hobbiesEl = document.querySelector('.hobbies');
const contain = document.querySelector('.contain');

console.log('elements', selectEl, nameEl, ageEl, bioEl, +hobbiesEl, contain);

// set event listeners    
// renderPerson(0);
selectEl.addEventListener('change', (e) => {
    hobbiesEl.innerHTML = '';
    favoriteAnimalsEl.innerHTML = '';
    const selected = e.target.value;
    // selectEl.addEventListener('change'(event)=> {const selected = e.target.value;})
    // console.log("user click");
   
    if (selected === 'one') {
        renderPerson(0);
    }
    else if (selected === 'two') {
        renderPerson(1);
    }
    else {
        renderPerson(2);
    }
});
 // update DOM to reflect the new state
function renderPerson(index) {
    contain.classList.add(`${people[index].name}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    ageEl.textContent = 'Age: ' + people[index].age;
    bioEl.textContent = 'Bio: ' + people[index].bio;
    hobbyTEl.textContent = 'My Hobbies Are:';

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }

    for (let animal of people[index].favoriteAnimals) {
        const li = document.createElement('li');
        li.textContent = animal;
        favoriteAnimalsEl.appendChild(li);
    }
}





// get user input
// use user input to update state


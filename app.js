// import functions
import { people } from "./data.js";
console.log(people, "people");
// grab DOM elements
const selectEl = document.getElementById("name");
const nameEl = document.querySelector(".name");
const ageEl = document.querySelector(".age");
const bioEl = document.querySelector(".bio");
const hobbyTEl = document.querySelector(".hobbyTitle");
const hobbiesEl = document.querySelector(".hobbies");
const contain = document.querySelector(".contain");

console.log("elements", selectEl, nameEl, ageEl, bioEl, hobbiesEl, contain);

selectEl.addEventListener("change", (e) => {
    hobbiesEl.innerHTML = '';
    const selected = e.target.value;
    // selectEl.addEventListener('change'(event)=> {const selected = e.target.value;})
    // console.log("user click");
    if (selected === 'one'){
        renderPerson(0);
    }
    else if (selected === 'two'){
        renderPerson(1);
    }
    else{
        renderPerson(2);
    }
});

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
}


// renderPerson(0);

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

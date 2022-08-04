const disney=["La sirenita","Cenicienta","Bella","Elsa"]

let ul=document.querySelector('ul')

let skillsConcat=""

for (let i = 0 ; i <disney.length; i++) {
    skillsConcat= skillsConcat+`<li>${disney[i].toUpperCase()}</li>`;
}
ul.innerHTML=skillsConcat
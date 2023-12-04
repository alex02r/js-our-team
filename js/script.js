//funzione che crea una lista iin html
function crateUl() {
    let ul = document.createElement('ul');
    let text = document.getElementById('text');
    text.appendChild(ul);
    return ul;
}
//funzione per scrivere nle DOM
function printValori(valore, elemento) {
    let li = document.createElement('li');
    li.innerText= valore;
    elemento.appendChild(li);
}

//MILESTONE 0
let dipendenti = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];
//MILESTONE 1 :
for (let i = 0; i < dipendenti.length; i++) {
    let ul = crateUl();
    for (let key in dipendenti[i]) {
        console.log(dipendenti[i][key]);
        let val = dipendenti[i][key];
        printValori(val,ul);
    }
}